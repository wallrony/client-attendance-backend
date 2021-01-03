import { encriptPass } from 'src/core/utils/CryptoUtils';
import AuthCredentials from '../../core/models/AuthCredentials';
import User from '../../core/models/User';
import { createError } from '../../core/utils/GeneralUtils';
import IAuthDAO from '../dao_interfaces/IAuthDAO';
import { createConnection } from '../database/Connection';

class AuthDAO extends IAuthDAO {
  async login(credentials: AuthCredentials): Promise<User> {
    const connection = createConnection();

    const row = await connection<User>(this.tableName)
      .select('*')
      .where('email', '=', credentials.email)
      .andWhere('password', '=', encriptPass(credentials.password))
      .first();
    
    await connection.destroy();

    if(!row) {
      throw createError("not-found", `${this.entityName} not found`);
    }

    delete row['password'];

    return row;
  }

  async register(data: User): Promise<boolean> {
    data.password = encriptPass(data.password);

    const connection = createConnection();

    const result = await connection(this.tableName)
      .insert(data)
      .returning('id');

    await connection.destroy();

    if (!result) {
      throw createError('internal-error' ,`error-insert-${this.entityName}`);
    }

    return true;
  }
}

export default AuthDAO;
