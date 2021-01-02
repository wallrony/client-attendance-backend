import User from "../../core/models/User";
import IDAO from "./IDAO";

class IUsersDAO extends IDAO {
  constructor() {
    super('user', 'users');
  }

  show(id: number): Promise<User> {
    throw('You have to implement this method.');
  }

  update(data: User): Promise<User> {
    throw('You have to implement this method.');
  }
}

export default IUsersDAO;