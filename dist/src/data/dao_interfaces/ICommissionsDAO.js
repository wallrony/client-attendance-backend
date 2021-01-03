"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDAO_1 = require("./IDAO");
class ICommissionsDAO extends IDAO_1.default {
    constructor() {
        super('commission', 'commissions');
    }
    index(attendanceID) {
        throw ('You have to implement this method.');
    }
    add(service) {
        throw ('You have to implement this method.');
    }
}
exports.default = ICommissionsDAO;
//# sourceMappingURL=ICommissionsDAO.js.map