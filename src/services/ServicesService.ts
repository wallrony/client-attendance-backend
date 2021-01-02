import ServiceModel from "../core/models/Service";
import ServiceResponse from "../core/models/ServiceResponse";
import FacadeInstance from "../data/Facade";
import Service from "./Service";

/**
 * @method index(attendanceID)
 * @method add(data)
 * @method update(data)
 * @method delete(id)
 */
class ServicesService extends Service {
  async index(attendanceID: number): Promise<ServiceResponse<ServiceModel[]>> {
    const result: ServiceResponse<ServiceModel[]> = {};

    try {
      result.data = await FacadeInstance().indexServices(attendanceID);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async add(data: ServiceModel): Promise<ServiceResponse<ServiceModel>> {
    const result: ServiceResponse<ServiceModel> = {};

    try {
      result.data = await FacadeInstance().addService(data);
    } catch(e) {
      result.err = e;
    }

    return result;
  }
  
  async update(data: ServiceModel): Promise<ServiceResponse<ServiceModel>> {
    const result: ServiceResponse<ServiceModel> = {};

    try {
      result.data = await FacadeInstance().updateService(data);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async delete(id: number): Promise<ServiceResponse<boolean>> {
    const result: ServiceResponse<boolean> = {};

    try {
      result.data = await FacadeInstance().deleteService(id);
    } catch(e) {
      result.err = e;
    }

    return result;
  }
}

export default ServicesService;
