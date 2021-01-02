import AuthCredentials from "../core/models/AuthCredentials";
import Doctor from "../core/models/Doctor";
import ServiceResponse from "../core/models/ServiceResponse";
import FacadeInstance from "../data/Facade";
import Service from "./Service";

/**
 * @method login(credentials)
 * @method register(data)
 */
class DoctorAuthService extends Service {
  async login(credentials: AuthCredentials): Promise<ServiceResponse<Doctor>> {
    const result: ServiceResponse<Doctor> = {};

    try {
      result.data = await FacadeInstance().doctorLogin(credentials);
    } catch (e) {
      result.err = e;
    }

    return result;
  }

  async register(data: Doctor): Promise<ServiceResponse<boolean>> {
    const result: ServiceResponse<boolean> = {};

    try {
      result.data = await FacadeInstance().doctorRegister(data);
    } catch (e) {
      result.err = e;
    }

    return result;
  }
}

export default DoctorAuthService;
