import User from "../../core/models/User";
import { createError } from "../../core/utils/GeneralUtils";
import IUsersDAO from "../dao_interfaces/IUserDAO";
import connection from "../database/Connection";

class UsersDAO extends IUsersDAO {
  async show(id: number): Promise<User> {
    const row = await connection<User>(this.tableName)
      .select('*')
      .where('id', '=', String(id))
      .first();

    if(!row) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return row;
  }

  async update(data: User): Promise<User> {
    const row = await connection<User>(this.tableName)
      .update(data)
      .where('id', '=', data.id)
      .returning('*');

    if(!row) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    return row[0];
  }
}

export default UsersDAO;
