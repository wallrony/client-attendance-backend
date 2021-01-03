import Doctor from "../../core/models/Doctor";
import IDAO from "./IDAO";
declare abstract class IDoctorAuthDAO extends IDAO {
    constructor();
    doctorLogin(credentials: any): Promise<Doctor>;
    doctorRegister(data: Doctor): Promise<boolean>;
}
export default IDoctorAuthDAO;
