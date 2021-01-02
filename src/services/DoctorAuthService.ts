import Doctor from "../core/models/Doctor";
import ServiceResponse from "../core/models/ServiceResponse";
import FacadeInstance from "../data/Facade";

class DoctorAuthService {
  async doctorLogin(email: string, password: string): Promise<ServiceResponse<Doctor>> {
    const result: ServiceResponse<Doctor> = {};

    try {
      result.data = await FacadeInstance().doctorLogin(email, password);
    } catch (e) {
      result.err = e;
    }

    return result;
  }

  async doctorRegister(data: Doctor): Promise<ServiceResponse<boolean>> {
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
