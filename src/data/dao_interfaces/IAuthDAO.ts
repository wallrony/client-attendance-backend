import User from "../../core/models/User";
import IDAO from "./IDAO";

class IAuthDAO extends IDAO {
  constructor() {
    super('user', 'users');
  }

  login(email: string, password: string): Promise<User> {
    throw('You have to implement this method.');
  }

  register(data: User): Promise<boolean> {
    throw('You have to implement this method.');
  }
}

export default IAuthDAO;