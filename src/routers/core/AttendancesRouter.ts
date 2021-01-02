import { IRouter } from "express";
import AttendancesHandler from "../../handlers/AttendancesHandler";
import Router from "../Router";

class AttendancesRouter extends Router<AttendancesHandler> {
  constructor() {
    super(new AttendancesHandler());
  }

  setRoutes(router: IRouter) {
    router.route('/attendances')
      .get(this.handler.index)
      .post(this.handler.add);

    router.route('/attendances/:id')
      .get(this.handler.update)
      .post(this.handler.delete);
  }
}

export default AttendancesRouter;
