"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommissionsHandler_1 = require("../../handlers/CommissionsHandler");
const Router_1 = require("../Router");
class CommissionsRouter extends Router_1.default {
    constructor(router) {
        super('CommissionsRouter', new CommissionsHandler_1.default(), router);
    }
    setRoutes() {
        this.setRouteWithLog('GET', '/doctor/:doctor_id/commissions', this.handler.index);
        this.setRouteWithLog('GET', '/doctor/:doctor_id/commissions', this.handler.add);
    }
}
exports.default = CommissionsRouter;
//# sourceMappingURL=CommissionsRouter.js.map