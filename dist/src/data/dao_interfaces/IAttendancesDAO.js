"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDAO_1 = require("./IDAO");
class IAttendancesDAO extends IDAO_1.default {
    constructor() {
        super('attendance', 'attendances');
    }
    index() {
        throw ('You have to implement this method.');
    }
    add(data) {
        throw ('You have to implement this method.');
    }
    update(data) {
        throw ('You have to implement this method.');
    }
    delete(id) {
        throw ('You have to implement this method.');
    }
}
exports.default = IAttendancesDAO;
//# sourceMappingURL=IAttendancesDAO.js.map