import User from "../../core/models/User";
import IDAO from "./IDAO";
declare class IUsersDAO extends IDAO {
    constructor();
    show(id: number): Promise<User>;
    update(data: User): Promise<User>;
}
export default IUsersDAO;
