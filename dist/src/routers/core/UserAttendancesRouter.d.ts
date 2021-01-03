import { IRouter } from "express";
import UserAttendancesHandler from "../../handlers/UserAttendancesHandler";
import Router from "../Router";
declare class UserAttendancesRouter extends Router<UserAttendancesHandler> {
    constructor(router: IRouter);
    setRoutes(): void;
}
export default UserAttendancesRouter;
