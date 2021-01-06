"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.schema.createTable('user_attendances', table => {
        table.increments('id').primary();
        table.integer('user_id').notNullable();
        table.integer('attendance_id').notNullable();
        table.integer('doctor_id').nullable();
        table.timestamp('date', {
            useTz: true,
        }).notNullable();
        table.string('status', 13).nullable();
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('attendance_id').references('id').inTable('attendances').onDelete('CASCADE');
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable('user_attendances');
}
exports.down = down;
//# sourceMappingURL=003_user_attendances_table.js.map