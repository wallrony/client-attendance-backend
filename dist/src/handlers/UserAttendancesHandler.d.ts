import { Request, Response } from 'express';
import Handler from "./Handler";
import UserAttendance from "../core/models/UserAttendance";
import UserAttendancesService from "../services/UserAttendancesService";
declare class UserAttendancesHandler extends Handler<UserAttendancesService, UserAttendance> {
    constructor();
    indexAll(request: Request, response: Response): Promise<Response>;
    index(request: Request, response: Response): Promise<Response>;
    add(request: Request, response: Response): Promise<Response>;
    update(request: Request, response: Response): Promise<Response>;
    delete(request: Request, response: Response): Promise<Response>;
}
export default UserAttendancesHandler;
