import User from '../../core/models/User';
import IAuthDAO from '../dao_interfaces/IAuthDAO';
import connection from '../database/Connection';

class AuthDAO extends IAuthDAO {
  async login(email: string, password: string): Promise<User> {
    const row = await connection<User>(this.tableName)
      .select('*')
      .where('email', '=', email)
      .andWhere('password', '=', password)
      .first();

    if(!row) {
      throw("not-found");
    }

    return row;
  }

  async register(data: User): Promise<boolean> {
    const result = await connection(this.tableName)
      .insert(data)
      .returning('id');

    if (result) {
      throw(`error-insert-${this.entityName}`);
    }

    return true;
  }
}

export default AuthDAO;
