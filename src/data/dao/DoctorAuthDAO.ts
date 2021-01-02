import Doctor from "../../core/models/Doctor";
import User from "../../core/models/User";
import IDoctorAuthDAO from "../dao_interfaces/IDoctorAuthDAO";
import connection from "../database/Connection";

class DoctorAuthDAO extends IDoctorAuthDAO {
  async doctorLogin(email: string, password: string): Promise<Doctor> {
    const row = await connection<Doctor>('users')
      .select('*')
      .join('doctors', 'doctors.user_id', '=', 'users.id')
      .where('email', '=', email)
      .andWhere('password', '=', password)
      .first();

    if(!row) {
      throw("not-found");
    }

    return row;
  }

  async doctorRegister(data: Doctor): Promise<boolean> {
    const trx = await connection.transaction();

    const userID = await trx('users')
      .insert(data as User)
      .returning('id');

    if (userID) {
      const doctorData: Doctor = {
        ...data,
        user_id: Number(userID),
      }

      const secondRow = await trx('doctors')
        .insert(doctorData)
        .returning('id')

      if(secondRow) {
        const finalRow = await trx.commit();

        if (!finalRow) {
          throw('error-commiting-transaction');
        }
      } else {
        throw(`error-inserting-${this.entityName}`);
      }
    } else {
      throw("error-inserting-user");
    }

    return true;
  }
}

export default DoctorAuthDAO;
