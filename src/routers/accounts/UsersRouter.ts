import { IRouter } from "express";

import Router from "../Router";
import UsersHandler from "../../handlers/UsersHandler";

class UsersRouter extends Router<UsersHandler> {
  constructor(router: IRouter) {
    super('Users', new UsersHandler(), router);
  }

  setRoutes() {
    this.setRouteWithLog('GET', '/users/:id', this.handler.show);
    this.setRouteWithLog('PUT', '/users/:id', this.handler.update);
  }
}

export default UsersRouter;
