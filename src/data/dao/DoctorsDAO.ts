import Doctor from "../../core/models/Doctor";
import { createError } from "../../core/utils/GeneralUtils";
import IDoctorDAO from "../dao_interfaces/IDoctorDAO";
import connection from "../database/Connection";

class DoctorsDAO extends IDoctorDAO {
  async show(id: number): Promise<Doctor> {
    const row = await connection(this.tableName)
      .join('users', 'users.id', '=', `${this.tableName}.user_id`)
      .where(`${this.tableName}.id`, '=', String(id))
      .select('*')
      .first<Doctor>();

    if(!row['id']) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return row;
  }

  async update(data: Doctor): Promise<Doctor> {
    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data['id']))
      .returning<Doctor>('*');

    if(!row) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return row;
  }
}

export default DoctorsDAO;
