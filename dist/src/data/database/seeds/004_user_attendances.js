"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const UserAttendance_1 = require("../../../core/models/UserAttendance");
async function seed(knex) {
    const userAttendances = [];
    userAttendances.push({
        attendance_id: 1,
        date: '2020-01-06T16:00:00.000Z',
        status: 'not-realized',
        user_id: 2,
    });
    userAttendances.push({
        attendance_id: 2,
        date: '2020-01-06T16:30:00.000Z',
        status: 'not-realized',
        user_id: 2,
    });
    userAttendances.push({
        attendance_id: 1,
        date: '2020-01-05T16:30:00.000Z',
        user_id: 2,
        status: 'realized',
        doctor_id: 1,
    });
    const result = await knex('user_attendances').insert(userAttendances);
    ;
    return result;
}
exports.seed = seed;
//# sourceMappingURL=004_user_attendances.js.map