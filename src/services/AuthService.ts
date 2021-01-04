import AuthorizedUser from "src/core/models/AuthorizedUser";
import { createToken } from "src/core/utils/TokenUtils";
import AuthCredentials from "../core/models/AuthCredentials";
import ServiceResponse from "../core/models/ServiceResponse";
import User from "../core/models/User";
import FacadeInstance from "../data/Facade";
import Service from "./Service";

/**
 * @method login(credentials)
 * @method register(data)
 */
class AuthService extends Service {
  async login(credentials: AuthCredentials): Promise<ServiceResponse<AuthorizedUser>> {
    const result: ServiceResponse<AuthorizedUser> = {};

    try {
      result.data = {};
      
      result.data.user = await FacadeInstance().login(credentials);
      result.data.auth_token = createToken(result.data.user.id);
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
