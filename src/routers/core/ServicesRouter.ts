import { IRouter } from "express";
import ServicesHandler from "../../handlers/ServicesHandler";
import Router from "../Router";

class ServicesRouter extends Router<ServicesHandler> {
  constructor(router: IRouter) {
    super('ServicesRouter', new ServicesHandler(), router);
  }

  setRoutes() {
    this.setRouteWithLog(
      'GET',
      '/attendances/:attendance_id/services',
      this.handler.index
    );

    this.setRouteWithLog(
      'POST',
      '/attendances/:attendance_id/services',
      this.handler.add
    );

    this.setRouteWithLog(
      'PUT',
      '/services/:id',
      this.handler.update
    );
    this.setRouteWithLog(
      'DELETE',
      '/services/:id',
      this.handler.delete
    );
  }
}

export default ServicesRouter;
