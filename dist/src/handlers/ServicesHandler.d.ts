import { Request, Response } from 'express';
import Handler from "./Handler";
import Service from "../core/models/Service";
import ServicesService from "../services/ServicesService";
declare class ServicesHandler extends Handler<ServicesService, Service> {
    constructor();
    index(request: Request, response: Response): Promise<Response>;
    add(request: Request, response: Response): Promise<Response>;
    update(request: Request, response: Response): Promise<Response>;
    delete(request: Request, response: Response): Promise<Response>;
}
export default ServicesHandler;
