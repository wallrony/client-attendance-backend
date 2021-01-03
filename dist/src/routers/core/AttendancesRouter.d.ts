import { IRouter } from "express";
import AttendancesHandler from "../../handlers/AttendancesHandler";
import Router from "../Router";
declare class AttendancesRouter extends Router<AttendancesHandler> {
    constructor(router: IRouter);
    setRoutes(): void;
}
export default AttendancesRouter;
