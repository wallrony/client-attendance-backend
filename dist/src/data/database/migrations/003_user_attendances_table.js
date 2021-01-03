"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.schema.createTable('user_attendances', table => {
        table.increments('id').primary();
        table.integer('user_id').notNullable();
        table.integer('attendance_id').notNullable();
        table.timestamp('date', {
            useTz: true,
        }).notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('attendance_id').references('id').inTable('attendances');
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable('user_attendances');
}
exports.down = down;
//# sourceMappingURL=003_user_attendances_table.js.map