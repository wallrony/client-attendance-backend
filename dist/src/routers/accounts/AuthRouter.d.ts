import { IRouter } from "express";
import Router from "../Router";
import AuthHandler from "../../handlers/AuthHandler";
declare class AuthRouter extends Router<AuthHandler> {
    constructor(router: IRouter);
    setRoutes(): void;
}
export default AuthRouter;
