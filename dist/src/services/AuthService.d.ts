import AuthorizedUser from "src/core/models/AuthorizedUser";
import AuthCredentials from "../core/models/AuthCredentials";
import ServiceResponse from "../core/models/ServiceResponse";
import User from "../core/models/User";
import Service from "./Service";
declare class AuthService extends Service {
    login(credentials: AuthCredentials): Promise<ServiceResponse<AuthorizedUser>>;
    register(data: User): Promise<ServiceResponse<boolean>>;
}
export default AuthService;
