import ServiceResponse from "../core/models/ServiceResponse";
import UserAttendance from "../core/models/UserAttendance";
import FacadeInstance from "../data/Facade";
import Service from "./Service";

/**
 * @method index(userID)
 * @method add(data, services)
 * @method update(data)
 * @method delete(id)
 */
class UserAttendancesService extends Service {
  async indexAll(doctor_id: number): Promise<ServiceResponse<UserAttendance[]>> {
    const result: ServiceResponse<UserAttendance[]> = {};

    try {
      result.data = await FacadeInstance().indexAllUserAttendances(doctor_id);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async index(userID: number): Promise<ServiceResponse<UserAttendance[]>> {
    const result: ServiceResponse<UserAttendance[]> = {};

    try {
      result.data = await FacadeInstance().indexUserAttendances(userID);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async add(data: UserAttendance, services: number[]): Promise<ServiceResponse<UserAttendance>> {
    const result: ServiceResponse<UserAttendance> = {};

    try {
      result.data = await FacadeInstance().addUserAttendance(data, services);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async update(data: UserAttendance, services: number[]): Promise<ServiceResponse<UserAttendance>> {
    const result: ServiceResponse<UserAttendance> = {};

    try {
      result.data = await FacadeInstance().updateUserAttendance(data, services)
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async delete(id: number): Promise<ServiceResponse<boolean>> {
    const result: ServiceResponse<boolean> = {};

    try {
      result.data = await FacadeInstance().deleteUserAttendance(id)
    } catch(e) {
      result.err = e;
    }

    return result;
  }
}

export default UserAttendancesService;
