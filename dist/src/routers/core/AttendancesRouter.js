"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AttendancesHandler_1 = require("../../handlers/AttendancesHandler");
const Router_1 = require("../Router");
class AttendancesRouter extends Router_1.default {
    constructor(router) {
        super('AttendancesRouter', new AttendancesHandler_1.default(), router);
    }
    setRoutes() {
        this.setRouteWithLog('GET', '/attendances', this.handler.index);
        this.setRouteWithLog('POST', '/attendances', this.handler.add);
        this.setRouteWithLog('PUT', '/attendances/:id', this.handler.update);
        this.setRouteWithLog('DELETE', '/attendances/:id', this.handler.delete);
    }
}
exports.default = AttendancesRouter;
//# sourceMappingURL=AttendancesRouter.js.map