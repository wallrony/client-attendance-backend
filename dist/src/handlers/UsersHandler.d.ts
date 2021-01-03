import { Request, Response } from 'express';
import Handler from "./Handler";
import User from "../core/models/User";
import UsersService from "../services/UsersService";
declare class UsersHandler extends Handler<UsersService, User> {
    constructor();
    show(request: Request, response: Response): Promise<Response>;
    update(request: Request, response: Response): Promise<Response>;
}
export default UsersHandler;
