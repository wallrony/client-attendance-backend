import Attendance from "../../core/models/Attendance";
import IAttendancesDAO from "../dao_interfaces/IAttendancesDAO";
declare class AttendancesDAO extends IAttendancesDAO {
    index(): Promise<Attendance[]>;
    add(data: Attendance): Promise<Attendance>;
    update(data: Attendance): Promise<Attendance>;
    delete(id: number): Promise<boolean>;
}
export default AttendancesDAO;
