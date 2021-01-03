import Attendance from "../../core/models/Attendance";
import IDAO from "./IDAO";
declare class IAttendancesDAO extends IDAO {
    constructor();
    index(): Promise<Attendance[]>;
    add(data: Attendance): Promise<Attendance>;
    update(data: Attendance): Promise<Attendance>;
    delete(id: number): Promise<boolean>;
}
export default IAttendancesDAO;
