import ServiceResponse from "../core/models/ServiceResponse";
import UserAttendance from "../core/models/UserAttendance";
import Service from "./Service";
declare class UserAttendancesService extends Service {
    indexAll(doctor_id: number): Promise<ServiceResponse<UserAttendance[]>>;
    index(userID: number): Promise<ServiceResponse<UserAttendance[]>>;
    add(data: UserAttendance, services: number[]): Promise<ServiceResponse<UserAttendance>>;
    update(data: UserAttendance, services: number[]): Promise<ServiceResponse<UserAttendance>>;
    delete(id: number): Promise<ServiceResponse<boolean>>;
}
export default UserAttendancesService;
