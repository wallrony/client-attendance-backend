"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    const attendances = [];
    attendances.push({
        title: 'Consulta de vista',
    });
    attendances.push({
        title: 'Revisão Dentária',
    });
    const result = await knex('attendances').insert(attendances);
    return result;
}
exports.seed = seed;
//# sourceMappingURL=001_attendances.js.map