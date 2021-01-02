import { IRouter } from "express";

import Router from "../Router";
import UsersHandler from "../../handlers/UsersHandler";

class UsersRouter extends Router<UsersHandler> {
  constructor() {
    super(new UsersHandler());
  }

  setRoutes(router: IRouter) {
    router.route('/users/:id')
      .get(this.handler.show)
      .put(this.handler.update);
  }
}

export default UsersRouter;
