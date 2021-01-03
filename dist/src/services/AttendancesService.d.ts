import Attendance from "../core/models/Attendance";
import ServiceResponse from "../core/models/ServiceResponse";
import Service from "./Service";
declare class AttendancesService extends Service {
    index(): Promise<ServiceResponse<Attendance[]>>;
    add(data: Attendance): Promise<ServiceResponse<Attendance>>;
    update(data: Attendance): Promise<ServiceResponse<Attendance>>;
    delete(id: number): Promise<ServiceResponse<boolean>>;
}
export default AttendancesService;
