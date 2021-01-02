import Commission from "../../core/models/Commission";
import { createError } from "../../core/utils/GeneralUtils";
import ICommissionsDAO from "../dao_interfaces/ICommissionsDAO";
import connection from "../database/Connection";

class CommissionsDAO extends ICommissionsDAO {
  async index(doctorId: number): Promise<Commission[]> {
    const rows = await connection<Commission>(this.tableName)
      .select('*')
      .where('doctor_id', '=', String(doctorId))

    if(!rows.length) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return rows;
  }

  async add(data: Commission): Promise<Commission> {
    const row = await connection(this.tableName)
      .insert(data)
      .returning<Commission>('*');

    if(!row) {
      throw createError('internal-error', `error-inserting-${this.entityName}`);
    }

    return row;
  }
}

export default CommissionsDAO;
