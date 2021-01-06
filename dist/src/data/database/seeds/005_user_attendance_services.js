"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const UserAttendanceService_1 = require("../../../core/models/UserAttendanceService");
async function seed(knex) {
    const userAttendanceServices = [];
    userAttendanceServices.push({
        service_id: 1,
        user_attendance_id: 1
    });
    userAttendanceServices.push({
        service_id: 2,
        user_attendance_id: 1
    });
    userAttendanceServices.push({
        service_id: 4,
        user_attendance_id: 2
    });
    userAttendanceServices.push({
        service_id: 2,
        user_attendance_id: 3
    });
    return await knex('user_attendance_services').insert(userAttendanceServices);
}
exports.seed = seed;
//# sourceMappingURL=005_user_attendance_services.js.map