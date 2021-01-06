import { Injectable } from "@nestjs/common";
import Attendance from "../core/models/Attendance";
import ServiceResponse from "../core/models/ServiceResponse";
import FacadeInstance from "../data/Facade";
import Service from "./Service";

/**
 * @method index()
 * @method update(Attendance)
 * @method delete(id)
 */
@Injectable()
class AttendancesService extends Service {
  async index(): Promise<ServiceResponse<Attendance[]>> {
    const result: ServiceResponse<Attendance[]> = {};

    try {
      result.data = await FacadeInstance().indexAttendances();
    } catch(e) {
      console.log(e);
      result.err = e;
    }

    return result;
  }

  async add(data: Attendance): Promise<ServiceResponse<Attendance>> {
    const result: ServiceResponse<Attendance> = {};

    try {
      result.data = await FacadeInstance().addAttendance(data);
    } catch(e) {
      console.log(e)
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
      console.log(e)
      result.err = e;
    }

    return result;
  }
}

export default AttendancesService;
