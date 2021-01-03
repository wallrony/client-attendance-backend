import Commission from "../../core/models/Commission";
import IDAO from "./IDAO";
declare class ICommissionsDAO extends IDAO {
    constructor();
    index(attendanceID: number): Promise<Commission[]>;
    add(service: Commission): Promise<Commission>;
}
export default ICommissionsDAO;
