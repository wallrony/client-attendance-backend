"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../Router");
const DoctorAuthHandler_1 = require("../../handlers/DoctorAuthHandler");
class DoctorAuthRouter extends Router_1.default {
    constructor(router) {
        super('DoctorAuthRouter', new DoctorAuthHandler_1.default(), router);
    }
    setRoutes() {
        this.setRouteWithLog('POST', '/login-doctor', this.handler.login);
        this.setRouteWithLog('POST', '/register-doctor', this.handler.register);
    }
}
exports.default = DoctorAuthRouter;
//# sourceMappingURL=DoctorAuthRouter.js.map