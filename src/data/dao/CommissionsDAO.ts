import Commission from "../../core/models/Commission";
import { createError } from "../../core/utils/GeneralUtils";
import ICommissionsDAO from "../dao_interfaces/ICommissionsDAO";
import { createConnection } from "../database/Connection";

class CommissionsDAO extends ICommissionsDAO {
  async index(doctorId: number): Promise<Commission[]> {
    const connection = createConnection();

    const rows = await connection<Commission>(this.tableName)
      .select('*')
      .where('doctor_id', '=', String(doctorId));
    
    await connection.destroy();

    if(!rows) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return rows;
  }

  async add(data: Commission): Promise<Commission> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .insert(data)
      .returning<Commission>('*');

    await connection.destroy();

    if(!row) {
      throw createError('internal-error', `error-inserting-${this.entityName}`);
    }

    return row[0];
  }
}

export default CommissionsDAO;
