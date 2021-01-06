import { encriptPass } from "src/core/utils/CryptoUtils";
import User from "../../core/models/User";
import { createError } from "../../core/utils/GeneralUtils";
import IUsersDAO from "../dao_interfaces/IUserDAO";
import { createConnection } from "../database/Connection";

class UsersDAO extends IUsersDAO {
  async show(id: number): Promise<User> {
    const connection = createConnection();

    const row = await connection<User>(this.tableName)
      .select('*')
      .where('id', '=', String(id))
      .first();

    await connection.destroy();

    if(!row) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    delete row['password'];

    return row;
  }

  async update(data: User): Promise<User> {
    if(data.password) {
      data.password = encriptPass(data.password);
    }

    const connection = createConnection();

    const row = await connection(this.tableName)
      .update({ ...data })
      .where('id', '=', String(data.id))
      .returning<User>('*');

    await connection.destroy();

    if(!row[0]) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    delete row[0]['password'];

    return row[0];
  }
}

export default UsersDAO;
