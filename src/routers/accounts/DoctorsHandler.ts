import { IRouter } from "express";

import Router from "../Router";
import DoctorsHandler from "../../handlers/DoctorsHandler";

class DoctorsRouter extends Router<DoctorsHandler> {
  constructor(router: IRouter) {
    super('DoctorsRouter', new DoctorsHandler(), router);
  }

  setRoutes() {
    this.setRouteWithLog('GET', '/doctors/:id', this.handler.show)
    this.setRouteWithLog('PUT', '/doctors/:id', this.handler.update)
  }
}

export default DoctorsRouter;
