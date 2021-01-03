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
    return await knex('attendances').insert(attendances);
}
exports.seed = seed;
//# sourceMappingURL=001_attendances.js.map