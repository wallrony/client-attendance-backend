import { IRouter } from "express";
import CommissionsHandler from "../../handlers/CommissionsHandler";
import Router from "../Router";
declare class CommissionsRouter extends Router<CommissionsHandler> {
    constructor(router: IRouter);
    setRoutes(): void;
}
export default CommissionsRouter;
