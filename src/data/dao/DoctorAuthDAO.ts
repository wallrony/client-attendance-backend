import AuthCredentials from "../../core/models/AuthCredentials";
import Doctor from "../../core/models/Doctor";
import User from "../../core/models/User";
import { createError } from "../../core/utils/GeneralUtils";
import IDoctorAuthDAO from "../dao_interfaces/IDoctorAuthDAO";
import connection from "../database/Connection";

class DoctorAuthDAO extends IDoctorAuthDAO {
  async doctorLogin(credentials: AuthCredentials): Promise<Doctor> {
    const row = await connection<Doctor>('users')
      .select('*')
      .join('doctors', 'doctors.user_id', '=', 'users.id')
      .where('email', '=', credentials.email)
      .andWhere('password', '=', credentials.password)
      .first();

    if(!row) {
      throw createError('not-found', `${this.entityName} not found`);
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
          throw createError('internal-error', `error-commiting-transaction-${this.entityName}`);
        }
      } else {
        throw createError('internal-error', `error-inserting-${this.entityName}`);
      }
    } else {
      throw createError('internal-error', 'error-inserting-user');
    }

    return true;
  }
}

export default DoctorAuthDAO;
