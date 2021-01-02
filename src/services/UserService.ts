import ServiceResponse from "../core/models/ServiceResponse";
import User from "../core/models/User";
import FacadeInstance from "../data/Facade";
import Service from "./Service";

/**
 * @method show(id)
 * @method update(data)
 */
class UserService extends Service {
  async show(id: number): Promise<ServiceResponse<User>> {
    const result: ServiceResponse<User> = {};

    try {
      result.data = await FacadeInstance().showUser(id);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async update(data: User): Promise<ServiceResponse<User>> {
    const result: ServiceResponse<User> = {};

    try {
      result.data = await FacadeInstance().updateUser(data);
    } catch(e) {
      result.err = e;
    }

    return result;
  }
}

export default UserService;
