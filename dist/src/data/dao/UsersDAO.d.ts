import User from "../../core/models/User";
import IUsersDAO from "../dao_interfaces/IUserDAO";
declare class UsersDAO extends IUsersDAO {
    show(id: number): Promise<User>;
    update(data: User): Promise<User>;
}
export default UsersDAO;
