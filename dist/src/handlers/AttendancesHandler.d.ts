import { Request, Response } from 'express';
import Handler from "./Handler";
import Attendance from "../core/models/Attendance";
import AttendancesService from "../services/AttendancesService";
declare class AttendancesHandler extends Handler<AttendancesService, Attendance> {
    constructor();
    index(request: Request, response: Response): Promise<Response<any>>;
    add(request: Request, response: Response): Promise<Response>;
    update(request: Request, response: Response): Promise<Response<any>>;
    delete(request: Request, response: Response): Promise<Response<any>>;
}
export default AttendancesHandler;
