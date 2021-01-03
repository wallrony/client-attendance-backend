"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.schema.createTable('doctors', table => {
        table.increments('id').primary();
        table.integer('user_id').notNullable();
        table.integer('attendance_id').notNullable();
        table.string('crm').notNullable();
        table.foreign('user_id').references('id').inTable('users').onDelete('NO ACTION');
        table.foreign('attendance_id').references('id').inTable('attendances');
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable('doctors');
}
exports.down = down;
//# sourceMappingURL=002_doctors_table.js.map