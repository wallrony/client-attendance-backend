import AuthCredentials from '../../core/models/AuthCredentials';
import User from '../../core/models/User';
import { createError } from '../../core/utils/GeneralUtils';
import IAuthDAO from '../dao_interfaces/IAuthDAO';
import connection from '../database/Connection';

class AuthDAO extends IAuthDAO {
  async login(credentials: AuthCredentials): Promise<User> {
    const row = await connection<User>(this.tableName)
      .select('*')
      .where('email', '=', credentials.email)
      .andWhere('password', '=', credentials.password)
      .first();

    if(!row) {
      throw createError("not-found", `${this.entityName} not found`);
    }

    return row;
  }

  async register(data: User): Promise<boolean> {
    const result = await connection(this.tableName)
      .insert(data)
      .returning('id');

    if (result) {
      throw createError('internal-error' ,`error-insert-${this.entityName}`);
    }

    return true;
  }
}

export default AuthDAO;
