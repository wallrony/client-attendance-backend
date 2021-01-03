"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../Router");
const AuthHandler_1 = require("../../handlers/AuthHandler");
class AuthRouter extends Router_1.default {
    constructor(router) {
        super('AuthRouter', new AuthHandler_1.default(), router);
    }
    setRoutes() {
        this.setRouteWithLog('POST', '/login', this.handler.login);
        this.setRouteWithLog('POST', '/register', this.handler.register);
    }
}
exports.default = AuthRouter;
//# sourceMappingURL=AuthRouter.js.map