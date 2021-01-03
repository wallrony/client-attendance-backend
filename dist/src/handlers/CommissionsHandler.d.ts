import { Request, Response } from 'express';
import Handler from "./Handler";
import Commission from "../core/models/Commission";
import CommissionsService from "../services/CommissionsService";
declare class CommissionsHandler extends Handler<CommissionsService, Commission> {
    constructor();
    index(request: Request, response: Response): Promise<Response>;
    add(request: Request, response: Response): Promise<Response>;
}
export default CommissionsHandler;
