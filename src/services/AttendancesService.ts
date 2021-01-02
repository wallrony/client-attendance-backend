import Attendance from "../core/models/Attendance";
import ServiceResponse from "../core/models/ServiceResponse";
import FacadeInstance from "../data/Facade";

class AttendancesService {
  async index(): Promise<ServiceResponse<Attendance[]>> {
    const result: ServiceResponse<Attendance[]> = {};

    try {
      result.data = await FacadeInstance().indexAttendances();
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async update(data: Attendance): Promise<ServiceResponse<Attendance>> {
    const result: ServiceResponse<Attendance> = {};

    try {
      result.data = await FacadeInstance().updateAttendance(data);
    } catch(e) {
      result.err = e;
    }

    return result;
  }

  async delete(id: number): Promise<ServiceResponse<boolean>> {
    const result: ServiceResponse<boolean> = {};

    try {
      result.data = await FacadeInstance().deleteAttendance(id);
    } catch(e) {
      result.err = e;
    }

    return result;
  }
}

export default AttendancesService;
