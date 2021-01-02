import UserAttendance from "../../core/models/UserAttendance";
import UserAttendanceService from "../../core/models/UserAttendanceService";
import { createError } from "../../core/utils/GeneralUtils";
import IUserAttendanceDAO from "../dao_interfaces/IUserAttendanceDAO";
import connection from "../database/Connection";

class UserAttendancesDAO extends IUserAttendanceDAO {
  async index(userID: number): Promise<UserAttendance[]> {
    const rows = await connection<UserAttendance>(this.tableName)
      .join(
        {uas: 'user_attendance_services'},
        'uas.user_attendance_id',
        '=',
        `${this.tableName}.attendance_id`
      ).join(
        {s: 'services'},
        's.id',
        '=',
        'uas.service_id'
      )
      .where('user_id', '=', String(userID))
      .select(`${this.tableName}.*`, 's.*')

    if(!rows.length) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return rows;
  }

  async add(data: UserAttendance, services: number[]): Promise<UserAttendance> {
    const trx = await connection.transaction();

    const row = await trx(this.tableName)
      .insert(data)
      .returning<UserAttendance>('*');

    if(!row['id']) {
      throw createError('internal-error', `error-inserting-${this.entityName}`);
    }

    const userAttendanceServices: UserAttendanceService[] = []

    for(const service_id of services) {
      userAttendanceServices.push({
        service_id,
        user_attendance_id: row['id']
      })
    }

    const secondRow = await trx('user_attendance_services')
      .insert(userAttendanceServices)
      .returning('*');
    
    if(!secondRow.length) {
      throw createError('internal-error', `error-inserting-user-attendance-services`);
    }

    const finalRow = await trx.commit();

    if(!finalRow) {
      throw createError('internal-error', `error-commiting-transaction-${this.entityName}`);
    }

    row.services = services

    return row;
  }

  async update(data: UserAttendance): Promise<UserAttendance> {
    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data['id']))
      .returning<UserAttendance>('*');

    if(!row) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return row;
  }

  async delete(id: number): Promise<boolean> {
    const row = await connection(this.tableName)
      .delete()
      .where('id', '=', String(id))

    if(!row) {
      throw createError('internal-error', `error-deleting-${this.entityName}`);
    }

    return true;
  }
}

export default UserAttendancesDAO;
