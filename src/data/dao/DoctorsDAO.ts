import Doctor from "../../core/models/Doctor";
import IDoctorDAO from "../dao_interfaces/IDoctorDAO";
import connection from "../database/Connection";

class DoctorsDAO extends IDoctorDAO {
  async show(id: number): Promise<Doctor> {
    const row = await connection(this.tableName)
      .select('*')
      .where('id', '=', String(id))
      .first<Doctor>();

    if(!row) {
      throw('not-found');
    }

    return row;
  }

  async update(data: Doctor): Promise<Doctor> {
    const row = await connection(this.tableName)
      .update(data)
      .where('id', '=', String(data['id']))
      .returning<Doctor>('*');

    if(!row) {
      throw('not-found');
    }

    return row;
  }
}

export default DoctorsDAO;
