import Commission from "../core/models/Commission";
import ServiceResponse from "../core/models/ServiceResponse";
import FacadeInstance from "../data/Facade";
import Service from "./Service";

/**
 * @method index(doctorId)
 * @method add(data)
 */
class CommissionsService extends Service {
  async index(doctorId: number): Promise<ServiceResponse<Commission[]>> {
    const result: ServiceResponse<Commission[]> = {};

    try {
      result.data = await FacadeInstance().indexCommissions(doctorId);
    } catch(e) {
      console.log(e)
      result.err = e;
    }

    return result;
  }

  async add(data: Commission): Promise<ServiceResponse<Commission>> {
    const result: ServiceResponse<Commission> = {};

    try {
      result.data = await FacadeInstance().addCommission(data);
    } catch(e) {
      console.log(e);
      result.err = e;
    }

    return result;
  }
}

export default CommissionsService;
