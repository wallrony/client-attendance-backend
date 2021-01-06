import { encriptPass } from "src/core/utils/CryptoUtils";
import AuthCredentials from "../../core/models/AuthCredentials";
import Doctor from "../../core/models/Doctor";
import User from "../../core/models/User";
import { createError } from "../../core/utils/GeneralUtils";
import IDoctorAuthDAO from "../dao_interfaces/IDoctorAuthDAO";
import { createConnection } from "../database/Connection";

class DoctorAuthDAO extends IDoctorAuthDAO {
  async doctorLogin(credentials: AuthCredentials): Promise<Doctor> {
    const connection = createConnection();

    const row = await connection<Doctor>('users')
      .select('*')
      .join('doctors', 'doctors.user_id', '=', 'users.id')
      .where('email', '=', credentials.email)
      .andWhere('password', '=', encriptPass(credentials.password))
      .first();
    
    await connection.destroy();

    if(!row) {
      throw createError('invalid-credentials', 'these credentials are invalid');
    }

    delete row['password'];

    return row;
  }

  async doctorRegister(data: Doctor): Promise<boolean> {
    data.password = encriptPass(data.password);

    const connection = createConnection();

    const trx = await connection.transaction();

    const userData: User = {
      email: data.email,
      password: data.password,
      name: data.name,
      birthday: data.birthday
    }

    const userID = await trx('users')
      .insert(userData)
      .returning('id');

    if (userID) {
      const secondRow = await trx('doctors')
        .insert({
          user_id: Number(userID),
          attendance_id: data.attendance_id,
          crm: data.crm,
        })
        .returning('id')

      if(secondRow) {
        const finalRow = await trx.commit();

        await trx.destroy();
        await connection.destroy();

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
