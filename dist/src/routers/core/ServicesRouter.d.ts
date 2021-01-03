import { IRouter } from "express";
import ServicesHandler from "../../handlers/ServicesHandler";
import Router from "../Router";
declare class ServicesRouter extends Router<ServicesHandler> {
    constructor(router: IRouter);
    setRoutes(): void;
}
export default ServicesRouter;
