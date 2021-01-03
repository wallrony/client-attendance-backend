"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../Router");
const DoctorsHandler_1 = require("../../handlers/DoctorsHandler");
class DoctorsRouter extends Router_1.default {
    constructor(router) {
        super('DoctorsRouter', new DoctorsHandler_1.default(), router);
    }
    setRoutes() {
        this.setRouteWithLog('GET', '/doctors/:id', this.handler.show);
        this.setRouteWithLog('PUT', '/doctors/:id', this.handler.update);
    }
}
exports.default = DoctorsRouter;
//# sourceMappingURL=DoctorsHandler.js.map