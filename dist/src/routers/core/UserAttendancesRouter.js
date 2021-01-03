"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAttendancesHandler_1 = require("../../handlers/UserAttendancesHandler");
const Router_1 = require("../Router");
class UserAttendancesRouter extends Router_1.default {
    constructor(router) {
        super('UserAttendanceRouter', new UserAttendancesHandler_1.default(), router);
    }
    setRoutes() {
        this.setRouteWithLog('GET', '/users/:user_id/attendances/:attendance_id/user_attendance', this.handler.index);
        this.setRouteWithLog('POST', '/users/:user_id/attendances/:attendance_id/user_attendance', this.handler.add);
        this.setRouteWithLog('PUT', '/users/:user_id/attendances/:attendance_id/user_attendance/:id', this.handler.update);
        this.setRouteWithLog('DELETE', '/users/:user_id/attendances/:attendance_id/user_attendance/:id', this.handler.delete);
    }
}
exports.default = UserAttendancesRouter;
//# sourceMappingURL=UserAttendancesRouter.js.map