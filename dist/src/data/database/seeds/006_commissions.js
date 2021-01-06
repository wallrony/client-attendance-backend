"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const Commission_1 = require("../../../core/models/Commission");
async function seed(knex) {
    const commissions = [];
    const actualDate = new Date();
    const date = `${actualDate.getFullYear()}-${actualDate.getMonth() + 1}-${actualDate.getDate()}T${actualDate.getHours()}:${actualDate.getMinutes()}:${actualDate.getSeconds()}.000Z`;
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