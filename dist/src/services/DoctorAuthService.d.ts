import AuthCredentials from "../core/models/AuthCredentials";
import Doctor from "../core/models/Doctor";
import ServiceResponse from "../core/models/ServiceResponse";
import Service from "./Service";
declare class DoctorAuthService extends Service {
    login(credentials: AuthCredentials): Promise<ServiceResponse<Doctor>>;
    register(data: Doctor): Promise<ServiceResponse<boolean>>;
}
export default DoctorAuthService;
