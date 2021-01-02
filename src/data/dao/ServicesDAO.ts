import Service from "../../core/models/Service";
import IServicesDAO from "../dao_interfaces/IServicesDAO";
import connection from "../database/Connection";

class ServicesDAO extends IServicesDAO {
  async index(attendanceID: number): Promise<Service[]> {
    const rows = await connection<Service>(this.tableName)
      .select('*')
      .where('attendance_id', '=', String(attendanceID))

    if(!rows.length) {
      throw('not-found');
    }

    return rows;
  }

  async add(data: Service): Promise<Service> {
    const row = await connection(this.tableName)
      .insert(data)
      .returning<Service>('*');

    if(!row) {
      throw(`error-inserting-${this.entityName}`);
    }

    return row;
  }

  async update(data: Service): Promise<Service> {
    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data['id']))
      .returning<Service>('*');

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

export default ServicesDAO;
