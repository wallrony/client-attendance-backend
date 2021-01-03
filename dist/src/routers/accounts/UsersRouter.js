"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../Router");
const UsersHandler_1 = require("../../handlers/UsersHandler");
class UsersRouter extends Router_1.default {
    constructor(router) {
        super('Users', new UsersHandler_1.default(), router);
    }
    setRoutes() {
        this.setRouteWithLog('GET', '/users/:id', this.handler.show);
        this.setRouteWithLog('PUT', '/users/:id', this.handler.update);
    }
}
exports.default = UsersRouter;
//# sourceMappingURL=UsersRouter.js.map