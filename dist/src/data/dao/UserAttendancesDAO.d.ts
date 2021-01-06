import UserAttendance from "../../core/models/UserAttendance";
import IUserAttendanceDAO from "../dao_interfaces/IUserAttendanceDAO";
declare class UserAttendancesDAO extends IUserAttendanceDAO {
    indexAll(doctor_id: number): Promise<UserAttendance[]>;
    index(userID: number): Promise<UserAttendance[]>;
    add(data: UserAttendance, services: number[]): Promise<UserAttendance>;
    update(data: UserAttendance, services: number[]): Promise<UserAttendance>;
    delete(id: number): Promise<boolean>;
}
export default UserAttendancesDAO;
