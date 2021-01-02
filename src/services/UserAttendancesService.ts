import ServiceResponse from "../core/models/ServiceResponse";
import UserAttendance from "../core/models/UserAttendance";
import FacadeInstance from "../data/Facade";

class UserAttendancesService {
  async index(userID: number): Promise<ServiceResponse<UserAttendance[]>> {
    const result: ServiceResponse<UserAttendance[]> = {};

    try {
      result.data = await FacadeInstance().indexUserAttendances(userID);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async add(data: UserAttendance): Promise<ServiceResponse<UserAttendance>> {
    const result: ServiceResponse<UserAttendance> = {};

    try {
      result.data = await FacadeInstance().addUserAttendance(data)
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async update(data: UserAttendance): Promise<ServiceResponse<UserAttendance>> {
    const result: ServiceResponse<UserAttendance> = {};

    try {
      result.data = await FacadeInstance().updateUserAttendance(data)
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
