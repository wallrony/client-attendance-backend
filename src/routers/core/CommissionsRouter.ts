import { IRouter } from "express";

import CommissionsHandler from "../../handlers/CommissionsHandler";
import Router from "../Router";

class CommissionsRouter extends Router<CommissionsHandler> {
  constructor() {
    super(new CommissionsHandler());
  }

  setRoutes(router: IRouter) {
    router.route('/doctor/:doctor_id/commissions')
      .get(this.handler.index)
      .post(this.handler.add);
  }
}

export default CommissionsRouter;
