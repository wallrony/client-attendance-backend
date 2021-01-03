import ServiceResponse from "../core/models/ServiceResponse";
import User from "../core/models/User";
import Service from "./Service";
declare class UserService extends Service {
    show(id: number): Promise<ServiceResponse<User>>;
    update(data: User): Promise<ServiceResponse<User>>;
}
export default UserService;
