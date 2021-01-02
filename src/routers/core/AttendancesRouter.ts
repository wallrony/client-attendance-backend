import { IRouter } from "express";
import AttendancesHandler from "../../handlers/AttendancesHandler";
import Router from "../Router";

class AttendancesRouter extends Router<AttendancesHandler> {
  constructor(router: IRouter) {
    super('AttendancesRouter', new AttendancesHandler(), router);
  }

  setRoutes() {
    this.setRouteWithLog('GET', '/attendances', this.handler.index)
    this.setRouteWithLog('POST', '/attendances', this.handler.add)
    this.setRouteWithLog('PUT', '/attendances/:id', this.handler.update)
    this.setRouteWithLog('DELETE', '/attendances/:id', this.handler.delete)
  }
}

export default AttendancesRouter;
