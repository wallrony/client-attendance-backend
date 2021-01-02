import { IRouter } from "express";

import Router from "../Router";
import AuthHandler from "../../handlers/AuthHandler";

class AuthRouter extends Router<AuthHandler> {
  constructor() {
    super(new AuthHandler());
  }

  setRoutes(router: IRouter) {
    router.post('/login', this.handler.login);
    router.post('/register', this.handler.register);
  }
}

export default AuthRouter;
