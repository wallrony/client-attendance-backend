import Doctor from "../../core/models/Doctor";
import { createError } from "../../core/utils/GeneralUtils";
import IDoctorDAO from "../dao_interfaces/IDoctorDAO";
import { createConnection } from "../database/Connection";

class DoctorsDAO extends IDoctorDAO {
  async show(id: number): Promise<Doctor> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .join('users', 'users.id', '=', `${this.tableName}.user_id`)
      .where(`${this.tableName}.id`, '=', String(id))
      .select('*', 'doctors.id as doctor_id')
      .first<Doctor>();
    
    await connection.destroy();

    if(!row || !row['id']) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    delete row['id'];
    delete row['password'];

    return row;
  }

  async update(data: Doctor): Promise<Doctor> {
    const connection = createConnection();

    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data['id']))
      .returning<Doctor>('*');

    await connection.destroy();

    if(!row[0]) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return row[0];
  }
}

export default DoctorsDAO;
