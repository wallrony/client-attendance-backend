import Doctor from "../core/models/Doctor";
import ServiceResponse from "../core/models/ServiceResponse";
import FacadeInstance from "../data/Facade";

class DoctorsService {
  async show(id: number): Promise<ServiceResponse<Doctor>> {
    const result: ServiceResponse<Doctor> = {};

    try {
      result.data = await FacadeInstance().showDoctor(id);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async update(data: Doctor): Promise<ServiceResponse<Doctor>> {
    const result: ServiceResponse<Doctor> = {};

    try {
      result.data = await FacadeInstance().updateDoctor(data);
    } catch(e) {
      result.err = e;
    }

    return result;
  }
}

export default DoctorsService;
