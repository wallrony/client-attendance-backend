"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.schema.createTable('commissions', table => {
        table.increments('id').primary();
        table.integer('doctor_id').notNullable();
        table.integer('client_attendance_id').notNullable();
        table.decimal('value').notNullable();
        table.foreign('doctor_id').references('id').inTable('doctors');
        table.foreign('client_attendance_id').references('id').inTable('users');
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable('commissions');
}
exports.down = down;
//# sourceMappingURL=006_commissions_table.js.map