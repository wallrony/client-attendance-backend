"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.schema.createTable('attendances', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable('attendances');
}
exports.down = down;
//# sourceMappingURL=001_attendances_table.js.map