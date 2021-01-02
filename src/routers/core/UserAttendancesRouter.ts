import { IRouter } from "express";
import UserAttendancesHandler from "../../handlers/UserAttendancesHandler";
import Router from "../Router";

class UserAttendancesRouter extends Router<UserAttendancesHandler> {
  constructor() {
    super(new UserAttendancesHandler());
  }

  setRoutes(router: IRouter) {
    router.route('/users/:user_id/attendances/:attendance_id/user_attendance')
      .get(this.handler.index)
      .post(this.handler.add);

    router.route('/users/:user_id/attendances/:attendance_id/user_attendance/:id')
      .put(this.handler.update)
      .delete(this.handler.delete);
  }
}

export default UserAttendancesRouter;
