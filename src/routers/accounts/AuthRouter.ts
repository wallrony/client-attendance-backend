import { IRouter, Request, Response } from "express";

import Router from "../Router";
import AuthHandler from "../../handlers/AuthHandler";

class AuthRouter extends Router<AuthHandler> {
  constructor(router: IRouter) {
    super('AuthRouter', new AuthHandler(), router);
  }

  setRoutes() {
    this.setRouteWithLog('POST', '/login', this.handler.login);
    this.setRouteWithLog('POST', '/register', this.handler.register);
  }
}

export default AuthRouter;
