"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AttendancesRouter_1 = require("./AttendancesRouter");
const CommissionsRouter_1 = require("./CommissionsRouter");
const ServicesRouter_1 = require("./ServicesRouter");
const UserAttendancesRouter_1 = require("./UserAttendancesRouter");
class CoreRouter {
    static setHandlers() {
        const group = express_1.Router();
        const attendanceRouter = new AttendancesRouter_1.default(group);
        const commissionsRouter = new CommissionsRouter_1.default(group);
        const servicesRouter = new ServicesRouter_1.default(group);
        const userAttendancesRouter = new UserAttendancesRouter_1.default(group);
        attendanceRouter.setRoutes();
        commissionsRouter.setRoutes();
        servicesRouter.setRoutes();
        userAttendancesRouter.setRoutes();
        return group;
    }
}
exports.default = CoreRouter;
//# sourceMappingURL=index.js.map