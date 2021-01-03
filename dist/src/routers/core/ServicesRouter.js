"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServicesHandler_1 = require("../../handlers/ServicesHandler");
const Router_1 = require("../Router");
class ServicesRouter extends Router_1.default {
    constructor(router) {
        super('ServicesRouter', new ServicesHandler_1.default(), router);
    }
    setRoutes() {
        this.setRouteWithLog('GET', '/attendances/:attendance_id/services', this.handler.index);
        this.setRouteWithLog('POST', '/attendances/:attendance_id/services', this.handler.add);
        this.setRouteWithLog('PUT', '/services/:id', this.handler.update);
        this.setRouteWithLog('DELETE', '/services/:id', this.handler.delete);
    }
}
exports.default = ServicesRouter;
//# sourceMappingURL=ServicesRouter.js.map