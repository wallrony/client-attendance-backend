import { Request, Response } from 'express';
import Handler from './Handler';
import Doctor from '../core/models/Doctor';
import DoctorAuthService from '../services/DoctorAuthService';
declare class DoctorAuthHandler extends Handler<DoctorAuthService, Doctor> {
    constructor();
    login(request: Request, response: Response): Promise<Response>;
    register(request: Request, response: Response): Promise<Response>;
}
export default DoctorAuthHandler;
