"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthRouter_1 = require("./AuthRouter");
const DoctorAuthRouter_1 = require("./DoctorAuthRouter");
const DoctorsHandler_1 = require("./DoctorsHandler");
const UsersRouter_1 = require("./UsersRouter");
class AccountsRouter {
    static setHandlers() {
        const group = express_1.Router();
        const authRouter = new AuthRouter_1.default(group);
        const doctorAuthRouter = new DoctorAuthRouter_1.default(group);
        const usersRouter = new UsersRouter_1.default(group);
        const doctorsRouter = new DoctorsHandler_1.default(group);
        authRouter.setRoutes();
        doctorAuthRouter.setRoutes();
        usersRouter.setRoutes();
        doctorsRouter.setRoutes();
        return group;
    }
}
exports.default = AccountsRouter;
//# sourceMappingURL=index.js.map