import Service from "src/core/models/Service";
import UserAttendance from "../../core/models/UserAttendance";
import UserAttendanceService from "../../core/models/UserAttendanceService";
import { createError } from "../../core/utils/GeneralUtils";
import IUserAttendanceDAO from "../dao_interfaces/IUserAttendanceDAO";
import { createConnection } from "../database/Connection";

class UserAttendancesDAO extends IUserAttendanceDAO {
  async indexAll(doctor_id: number): Promise<UserAttendance[]> {
    const connection = createConnection();

    const rows = await connection(this.tableName)
      .select<UserAttendance[]>(
        `${this.tableName}.id`,
        `${this.tableName}.user_id`,
        `${this.tableName}.attendance_id`,
        `${this.tableName}.date`,
        `${this.tableName}.status`,
        `${this.tableName}.doctor_id`,
        'attendances.title',
      )
      .join('attendances', 'attendances.id', '=', `${this.tableName}.attendance_id`)
      .innerJoin('doctors', 'doctors.attendance_id', '=', 'attendances.id')
      .where(`${this.tableName}.status`, '<>', 'realized')

    if(!rows) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    for(let i = 0 ; i < rows.length; i++) {
      const row = rows[i];

      if(row['status'] === 'in-progress' && Number(row['doctor_id']) !== Number(doctor_id)) {
        rows.splice(i, 1);

        i--;
      }
    }

    for(const row of rows) {
      const secondRow = await connection<Service>('services')
        .select('services.name', 'services.price', 'services.duration', 'services.id')
        .innerJoin('user_attendance_services', 'user_attendance_services.service_id', '=', `services.id`)
        .where('services.attendance_id', '=', row['attendance_id'])
        .andWhere('user_attendance_services.user_attendance_id', '=', row['id']);

      row['services'] = secondRow;
    }

    await connection.destroy();

    return rows;
  }

  async index(userID: number): Promise<UserAttendance[]> {
    const connection = createConnection();

    const rows = await connection<UserAttendance>(this.tableName)
      .select(
        `${this.tableName}.id`,
        `${this.tableName}.attendance_id`,
        `${this.tableName}.date`,
        'attendances.title',
      )
      .leftOuterJoin('attendances', 'attendances.id', '=', `${this.tableName}.attendance_id`)
      .where(`${this.tableName}.user_id`, '=', String(userID))
      .andWhere('status', '=', 'not-realized');

    if(!rows) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    for(let i = 0 ; i < rows.length; i++) {
      const row = rows[i];

      const secondRow = await connection('user_attendance_services')
      .select('services.name', 'services.id', 'services.price', 'services.duration')
        .innerJoin('services', 'services.id', '=', 'user_attendance_services.service_id')
        .where('user_attendance_services.user_attendance_id', '=', String(row['id']));

      rows[i]['services'] = secondRow;
    }

    await connection.destroy();

    return rows;
  }

  async add(data: UserAttendance, services: number[]): Promise<UserAttendance> {
    const connection = createConnection();

    const trx = await connection.transaction();

    const row = await trx(this.tableName)
      .insert({
        ...data,
        status: 'not-realized'
      })
      .returning<UserAttendance>('*');

    if(!row) {
      throw createError('internal-error', `error-inserting-${this.entityName}`);
    }

    const userAttendanceServices: UserAttendanceService[] = []

    for(const service_id of services) {
      userAttendanceServices.push({
        service_id,
        user_attendance_id: row[0]['id']
      });
    }

    const secondRow = await trx('user_attendance_services')
      .insert(userAttendanceServices)
      .returning('*');
    
    if(!secondRow.length) {
      throw createError('internal-error', `error-inserting-user-attendance-services`);
    }

    await trx.commit();

    const finalRow = await connection('user_attendance_services')
      .select('services.name', 'services.id', 'services.price', 'services.duration')
      .innerJoin('services', 'services.id', '=', 'user_attendance_services.service_id')
      .where('user_attendance_services.user_attendance_id', '=', String(row[0]['id']));

    row[0]['services'] = finalRow;

    await trx.destroy();
    await connection.destroy();

    if(!finalRow) {
      throw createError('internal-error', `error-commiting-transaction-${this.entityName}`);
    }

    return row[0];
  }

  async update(data: UserAttendance, services: number[]): Promise<UserAttendance> {
    const connection = createConnection();

    const trx = await connection.transaction();

    const row = await trx(this.tableName)
      .update(data)
      .where('id', '=', String(data['id']))
      .returning<UserAttendance>('*');

    if(!row) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    await trx('user_attendance_services')
      .where('user_attendance_services.user_attendance_id', '=', String(data.id))
      .delete();
    
    const servicesList = [];

    for(const service_id of services) {
      servicesList.push({
        user_attendance_id: data.id,
        service_id
      })
    }

    const thirdRow = await trx('user_attendance_services')
      .insert(servicesList)

    if(!thirdRow) {
      throw createError('internal-error', `error-inserting-user-attendance-services`);
    }

    await trx.commit();

    const finalRow = await connection('user_attendance_services')
    .select('services.name', 'services.id', 'services.price', 'services.duration')
      .innerJoin('services', 'services.id', '=', 'user_attendance_services.service_id')
      .where('user_attendance_services.user_attendance_id', '=', String(row[0]['id']));

    row[0]['services'] = finalRow;

    await trx.destroy();
    await connection.destroy();

    return row[0];
  }

  async delete(id: number): Promise<boolean> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .delete()
      .where('id', '=', String(id));

    await connection.destroy();

    if(row === 0) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return true;
  }
}

export default UserAttendancesDAO;
