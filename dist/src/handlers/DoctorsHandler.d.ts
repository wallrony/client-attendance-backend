import { Request, Response } from 'express';
import Doctor from "../core/models/Doctor";
import DoctorsService from "../services/DoctorsService";
import Handler from "./Handler";
declare class DoctorsHandler extends Handler<DoctorsService, Doctor> {
    constructor();
    show(request: Request, response: Response): Promise<Response>;
    update(request: Request, response: Response): Promise<Response>;
}
export default DoctorsHandler;
