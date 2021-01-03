import Commission from "../../core/models/Commission";
import ICommissionsDAO from "../dao_interfaces/ICommissionsDAO";
declare class CommissionsDAO extends ICommissionsDAO {
    index(doctorId: number): Promise<Commission[]>;
    add(data: Commission): Promise<Commission>;
}
export default CommissionsDAO;
