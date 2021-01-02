import { IRouter } from "express";

import CommissionsHandler from "../../handlers/CommissionsHandler";
import Router from "../Router";

class CommissionsRouter extends Router<CommissionsHandler> {
  constructor(router: IRouter) {
    super('CommissionsRouter', new CommissionsHandler(), router);
  }

  setRoutes() {
    this.setRouteWithLog('GET', '/doctor/:doctor_id/commissions', this.handler.index);
    this.setRouteWithLog('GET', '/doctor/:doctor_id/commissions', this.handler.add);
  }
}

export default CommissionsRouter;
