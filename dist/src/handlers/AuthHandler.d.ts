import { Request, Response } from 'express';
import User from '../core/models/User';
import AuthService from '../services/AuthService';
import Handler from './Handler';
declare class AuthHandler extends Handler<AuthService, User> {
    constructor();
    login(request: Request, response: Response): Promise<Response>;
    register(request: Request, response: Response): Promise<Response>;
}
export default AuthHandler;
