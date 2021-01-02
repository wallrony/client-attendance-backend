import { IRouter } from "express";
import UserAttendancesHandler from "../../handlers/UserAttendancesHandler";
import Router from "../Router";

class UserAttendancesRouter extends Router<UserAttendancesHandler> {
  constructor(router: IRouter) {
    super('UserAttendanceRouter', new UserAttendancesHandler(), router);
  }

  setRoutes() {
    this.setRouteWithLog(
      'GET',
      '/users/:user_id/attendances/:attendance_id/user_attendance',
      this.handler.index,
    );

    this.setRouteWithLog(
      'POST',
      '/users/:user_id/attendances/:attendance_id/user_attendance',
      this.handler.add,
    );

    this.setRouteWithLog(
      'PUT',
      '/users/:user_id/attendances/:attendance_id/user_attendance/:id',
      this.handler.update,
    );

    this.setRouteWithLog(
      'DELETE',
      '/users/:user_id/attendances/:attendance_id/user_attendance/:id',
      this.handler.delete,
    );
  }
}

export default UserAttendancesRouter;
