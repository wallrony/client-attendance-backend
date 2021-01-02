import UserAttendance from "../../core/models/UserAttendance";
import IUserAttendanceDAO from "../dao_interfaces/IUserAttendanceDAO";
import connection from "../database/Connection";

class UserAttendancesDAO extends IUserAttendanceDAO {
  async index(userID: number): Promise<UserAttendance[]> {
    const rows = await connection<UserAttendance>(this.tableName)
      .select('*')
      .where('user_id', '=', String(userID))

    if(!rows.length) {
      throw('not-found');
    }

    return rows;
  }

  async add(data: UserAttendance): Promise<UserAttendance> {
    const row = await connection(this.tableName)
      .insert(data)
      .returning<UserAttendance>('*');

    if(!row) {
      throw(`error-inserting-${this.entityName}`);
    }

    return row;
  }

  async update(data: UserAttendance): Promise<UserAttendance> {
    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data['id']))
      .returning<UserAttendance>('*');

    if(!row) {
      throw('not-found');
    }

    return row;
  }

  async delete(id: number): Promise<boolean> {
    const row = await connection(this.tableName)
      .delete()
      .where('id', '=', String(id))

    if(!row) {
      throw(`error-deleting-${this.entityName}`);
    }

    return true;
  }
}

export default UserAttendancesDAO;
