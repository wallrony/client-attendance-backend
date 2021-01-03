"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDAO_1 = require("./IDAO");
class IUserAttendanceDAO extends IDAO_1.default {
    constructor() {
        super('user-attendance', 'user_attendances');
    }
    index(attendanceID) {
        throw ('You have to implement this method.');
    }
    add(service, services) {
        throw ('You have to implement this method.');
    }
    update(data, services) {
        throw ('You have to implement this method.');
    }
    delete(id) {
        throw ('You have to implement this method.');
    }
}
exports.default = IUserAttendanceDAO;
//# sourceMappingURL=IUserAttendanceDAO.js.map