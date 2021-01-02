import Attendance from "../../core/models/Attendance";
import IAttendancesDAO from "../dao_interfaces/IAttendancesDAO";
import connection from "../database/Connection";

class AttendancesDAO extends IAttendancesDAO {
  async index(): Promise<Attendance[]> {
    const rows = await connection<Attendance>(this.tableName)
      .select('*');

    if(!rows) {
      throw('not-found')
    }

    return rows;
  }

  async update(data: Attendance): Promise<Attendance> {
    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data.id))
      .returning<Attendance>('*');

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
      throw('error-deleting-user');
    }

    return true;
  }
}

export default AttendancesDAO;
