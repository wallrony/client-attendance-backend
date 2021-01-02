import Model from '../core/models/Model';
import Service from '../services/Service';
import Handler from '../handlers/Handler';
import { IRouter } from 'express';

abstract class Router<T extends Handler<Service, Model>> {
  private readonly routerName: string;
  protected readonly router: IRouter;
  protected readonly handler: T;

  constructor(routerName: string, handler: T, router: IRouter) {
    this.routerName = routerName;
    this.handler = handler;
    this.router = router;
  }

  setRouteWithLog(method: string, path: string, ...handlers: Array<(...args: any[]) => any>) {
    if(method === 'GET') {
      this.router.get(path, ...handlers);
    } else if(method === 'POST') {
      this.router.post(path, ...handlers);
    } else if(method === 'PUT') {
      this.router.put(path, ...handlers);
    } else if(method === 'DELETE') {
      this.router.delete(path, ...handlers);
    }

    console.log(`\u001b[1;32m[Route Setted] -> \u001b[33m${this.routerName} \u001b[1;31m${method} -> ${path} \u001b[0m`);
  }
}

export default Router;
