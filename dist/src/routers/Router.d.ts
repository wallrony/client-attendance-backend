import Model from '../core/models/Model';
import Service from '../services/Service';
import Handler from '../handlers/Handler';
import { IRouter } from 'express';
declare abstract class Router<T extends Handler<Service, Model>> {
    private readonly routerName;
    protected readonly router: IRouter;
    protected readonly handler: T;
    constructor(routerName: string, handler: T, router: IRouter);
    setRouteWithLog(method: string, path: string, ...handlers: Array<(...args: any[]) => any>): void;
}
export default Router;
