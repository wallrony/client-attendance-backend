import Service from "../core/models/Service";
import ServiceResponse from "../core/models/ServiceResponse";
import FacadeInstance from "../data/Facade";

class ServicesService {
  async index(attendanceID: number): Promise<ServiceResponse<Service[]>> {
    const result: ServiceResponse<Service[]> = {};

    try {
      result.data = await FacadeInstance().indexServices(attendanceID);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async add(data: Service): Promise<ServiceResponse<Service>> {
    const result: ServiceResponse<Service> = {};

    try {
      result.data = await FacadeInstance().addService(data);
    } catch(e) {
      result.err = e;
    }

    return result;
  }
  
  async update(data: Service): Promise<ServiceResponse<Service>> {
    const result: ServiceResponse<Service> = {};

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
