import { IRouter } from "express";

import Router from "../Router";
import DoctorsHandler from "../../handlers/DoctorsHandler";

class DoctorsRouter extends Router<DoctorsHandler> {
  constructor() {
    super(new DoctorsHandler());
  }

  setRoutes(router: IRouter) {
    router.route('/doctors/:id')
      .get(this.handler.show)
      .put(this.handler.update);
  }
}

export default DoctorsRouter;
