import AuthorizedUser from "src/core/models/AuthorizedUser";
import AuthCredentials from "../core/models/AuthCredentials";
import Doctor from "../core/models/Doctor";
import ServiceResponse from "../core/models/ServiceResponse";
import Service from "./Service";
declare class DoctorAuthService extends Service {
    login(credentials: AuthCredentials): Promise<ServiceResponse<AuthorizedUser>>;
    register(data: Doctor): Promise<ServiceResponse<boolean>>;
}
export default DoctorAuthService;
