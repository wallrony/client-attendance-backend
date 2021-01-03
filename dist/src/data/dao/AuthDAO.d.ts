import AuthCredentials from '../../core/models/AuthCredentials';
import User from '../../core/models/User';
import IAuthDAO from '../dao_interfaces/IAuthDAO';
declare class AuthDAO extends IAuthDAO {
    login(credentials: AuthCredentials): Promise<User>;
    register(data: User): Promise<boolean>;
}
export default AuthDAO;
