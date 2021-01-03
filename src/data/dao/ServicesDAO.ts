import Service from "../../core/models/Service";
import { createError } from "../../core/utils/GeneralUtils";
import IServicesDAO from "../dao_interfaces/IServicesDAO";
import { createConnection } from "../database/Connection";

class ServicesDAO extends IServicesDAO {
  async index(attendanceID: number): Promise<Service[]> {
    const connection = createConnection();

    const rows = await connection<Service>(this.tableName)
      .select('*')
      .where('attendance_id', '=', String(attendanceID))

    await connection.destroy();

    if(!rows.length) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return rows;
  }

  async add(data: Service): Promise<Service> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .insert(data)
      .returning<Service>('*');

    await connection.destroy();

    if(!row) {
      throw createError('internal-error', `error-inserting-${this.entityName}`);
    }

    return row[0];
  }

  async update(data: Service): Promise<Service> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data['id']))
      .returning<Service>('*');

    await connection.destroy();

    if(!row || !row[0]) {
      throw createError('not-found', `${this.entityName} not found`);
    }

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

export default ServicesDAO;
