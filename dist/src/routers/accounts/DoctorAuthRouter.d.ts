import { IRouter } from "express";
import Router from "../Router";
import DoctorAuthHandler from "../../handlers/DoctorAuthHandler";
declare class DoctorAuthRouter extends Router<DoctorAuthHandler> {
    constructor(router: IRouter);
    setRoutes(): void;
}
export default DoctorAuthRouter;
