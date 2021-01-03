"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.schema.createTable('user_attendance_services', table => {
        table.integer('user_attendance_id').notNullable();
        table.integer('service_id').notNullable();
        table.foreign('user_attendance_id').references('id').inTable('user_attendances').onDelete('CASCADE');
        table.foreign('service_id').references('id').inTable('services').onDelete('CASCADE');
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable('user_attendance_services');
}
exports.down = down;
//# sourceMappingURL=005_user_attendance_services_table.js.map