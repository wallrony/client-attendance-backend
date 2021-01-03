import AuthCredentials from "../../core/models/AuthCredentials";
import User from "../../core/models/User";
import IDAO from "./IDAO";
declare class IAuthDAO extends IDAO {
    constructor();
    login(credentials: AuthCredentials): Promise<User>;
    register(data: User): Promise<boolean>;
}
export default IAuthDAO;
