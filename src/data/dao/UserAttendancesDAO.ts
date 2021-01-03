import UserAttendance from "../../core/models/UserAttendance";
import UserAttendanceService from "../../core/models/UserAttendanceService";
import { createError } from "../../core/utils/GeneralUtils";
import IUserAttendanceDAO from "../dao_interfaces/IUserAttendanceDAO";
import { createConnection } from "../database/Connection";

class UserAttendancesDAO extends IUserAttendanceDAO {
  async index(userID: number): Promise<UserAttendance[]> {
    const connection = createConnection();

    const rows = await connection<UserAttendance>(this.tableName)
      .where(`${this.tableName}.user_id`, '=', String(userID))
      .select('*');

    if(!rows) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    for(const row of rows) {
      const secondRow = await connection('user_attendance_services')
        .select('services.name', 'services.id')
        .innerJoin('services', 'services.id', '=', 'user_attendance_services.service_id')
        .where('user_attendance_services.user_attendance_id', '=', String(row['id']));

      row['services'] = secondRow;
    }

    await connection.destroy();

    return rows;
  }

  async add(data: UserAttendance, services: number[]): Promise<UserAttendance> {
    const connection = createConnection();

    const trx = await connection.transaction();

    const row = await trx(this.tableName)
      .insert(data)
      .returning<UserAttendance>('*');

    if(!row) {
      throw createError('internal-error', `error-inserting-${this.entityName}`);
    }

    const userAttendanceServices: UserAttendanceService[] = []

    for(const service_id of services) {
      userAttendanceServices.push({
        service_id,
        user_attendance_id: row[0]['id']
      })
    }

    const secondRow = await trx('user_attendance_services')
      .insert(userAttendanceServices)
      .returning('*');
    
    if(!secondRow.length) {
      throw createError('internal-error', `error-inserting-user-attendance-services`);
    }

    const finalRow = await trx.commit();

    await trx.destroy();
    await connection.destroy();

    if(!finalRow) {
      throw createError('internal-error', `error-commiting-transaction-${this.entityName}`);
    }

    row[0].services = services

    return row[0];
  }

  async update(data: UserAttendance, services: number[]): Promise<UserAttendance> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data['id']))
      .returning<UserAttendance>('*');

    if(!row) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    const secondRow = await connection('user_attendance_services')
      .where('user_attendance_services.user_attendance_id', '=', String(data.id))
      .delete();
    
    const servicesList = [];

    for(const service_id of services) {
      servicesList.push({
        user_attendance_id: data.id,
        service_id
      })
    }

    const thirdRow = await connection('user_attendance_services')
      .insert(servicesList)

    if(!thirdRow) {
      throw createError('internal-error', `error-inserting-user-attendance-services`);
    }

    await connection.destroy();

    row[0]['services'] = services;

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
