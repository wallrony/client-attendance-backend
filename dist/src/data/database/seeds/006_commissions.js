"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const Commission_1 = require("../../../core/models/Commission");
const DateUtils_1 = require("../../../core/utils/DateUtils");
async function seed(knex) {
    const commissions = [];
    const date = DateUtils_1.getActualDate();
    commissions.push({
        client_attendance_id: 3,
        doctor_id: 1,
        value: 135,
        date
    });
    return await knex('commissions').insert(commissions);
}
exports.seed = seed;
//# sourceMappingURL=006_commissions.js.map