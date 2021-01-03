import { IRouter } from "express";
import Router from "../Router";
import DoctorsHandler from "../../handlers/DoctorsHandler";
declare class DoctorsRouter extends Router<DoctorsHandler> {
    constructor(router: IRouter);
    setRoutes(): void;
}
export default DoctorsRouter;
