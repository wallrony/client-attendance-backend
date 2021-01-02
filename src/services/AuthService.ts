import Doctor from "../core/models/Doctor";
import ServiceResponse from "../core/models/ServiceResponse";
import User from "../core/models/User";
import FacadeInstance from "../data/Facade";

class AuthService {
  async login(email: string, password: string): Promise<ServiceResponse<User>> {
    const result: ServiceResponse<User> = {};

    try {
      result.data = await FacadeInstance().login(email, password);
    } catch (e) {
      result.err = e;
    }

    return result;
  }
  
  async register(data: User): Promise<ServiceResponse<boolean>> {
    const result: ServiceResponse<boolean> = {};

    try {
      result.data = await FacadeInstance().register(data);
    } catch (e) {
      result.err = e;
    }

    return result;
  }
}

export default AuthService;
