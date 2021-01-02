import { IRouter } from "express";
import ServicesHandler from "../../handlers/ServicesHandler";
import Router from "../Router";

class ServicesRouter extends Router<ServicesHandler> {
  constructor() {
    super(new ServicesHandler());
  }

  setRoutes(router: IRouter) {
    router.route('/attendances/:attendance_id/services')
      .get(this.handler.index)
      .post(this.handler.add);

    router.route('/services/:id')
      .put(this.handler.update)
      .delete(this.handler.delete);
  }
}

export default ServicesRouter;
