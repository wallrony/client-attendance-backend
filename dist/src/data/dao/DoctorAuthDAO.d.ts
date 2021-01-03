import AuthCredentials from "../../core/models/AuthCredentials";
import Doctor from "../../core/models/Doctor";
import IDoctorAuthDAO from "../dao_interfaces/IDoctorAuthDAO";
declare class DoctorAuthDAO extends IDoctorAuthDAO {
    doctorLogin(credentials: AuthCredentials): Promise<Doctor>;
    doctorRegister(data: Doctor): Promise<boolean>;
}
export default DoctorAuthDAO;
