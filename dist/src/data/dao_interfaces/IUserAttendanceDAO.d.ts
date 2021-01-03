import UserAttendance from "../../core/models/UserAttendance";
import IDAO from "./IDAO";
declare class IUserAttendanceDAO extends IDAO {
    constructor();
    index(attendanceID: number): Promise<UserAttendance[]>;
    add(service: UserAttendance, services: number[]): Promise<UserAttendance>;
    update(data: UserAttendance, services: number[]): Promise<UserAttendance>;
    delete(id: number): Promise<boolean>;
}
export default IUserAttendanceDAO;
