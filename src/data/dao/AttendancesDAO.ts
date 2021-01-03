import Attendance from "../../core/models/Attendance";
import { createError } from "../../core/utils/GeneralUtils";
import IAttendancesDAO from "../dao_interfaces/IAttendancesDAO";
import { createConnection } from "../database/Connection";

class AttendancesDAO extends IAttendancesDAO {
  async index(): Promise<Attendance[]> {
    const connection = createConnection();

    const rows = await connection<Attendance>(this.tableName)
      .select('*');

    await connection.destroy();

    if(!rows) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return rows;
  }

  async add(data: Attendance): Promise<Attendance> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .insert(data)
      .returning<Attendance>('*');

    await connection.destroy();

    if(!row[0]['id']) {
      throw createError('internal-error', `error-inserting-${this.entityName}`);
    }

    return row[0];
  }

  async update(data: Attendance): Promise<Attendance> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data.id))
      .returning<Attendance>('*');

    await connection.destroy();

    if(!row[0]) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return row[0];
  }

  async delete(id: number): Promise<boolean> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .delete()
      .where('id', '=', String(id))

    await connection.destroy();

    if(!row) {
      throw createError('internal-error', 'error deleting user');
    }

    return true;
  }
}

export default AttendancesDAO;
