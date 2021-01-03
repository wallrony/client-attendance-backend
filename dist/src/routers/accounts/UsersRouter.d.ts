import { IRouter } from "express";
import Router from "../Router";
import UsersHandler from "../../handlers/UsersHandler";
declare class UsersRouter extends Router<UsersHandler> {
    constructor(router: IRouter);
    setRoutes(): void;
}
export default UsersRouter;
