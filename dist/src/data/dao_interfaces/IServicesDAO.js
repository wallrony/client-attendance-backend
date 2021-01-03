"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDAO_1 = require("./IDAO");
class IServicesDAO extends IDAO_1.default {
    constructor() {
        super('service', 'services');
    }
    index(attendanceID) {
        throw ('You have to implement this method.');
    }
    add(service) {
        throw ('You have to implement this method.');
    }
    update(data) {
        throw ('You have to implement this method.');
    }
    delete(id) {
        throw ('You have to implement this method.');
    }
}
exports.default = IServicesDAO;
//# sourceMappingURL=IServicesDAO.js.map