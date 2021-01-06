"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.schema.createTable('services', table => {
        table.increments('id').primary();
        table.integer('attendance_id').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.decimal('price').notNullable();
        table.decimal('duration').notNullable();
        table.foreign('attendance_id').references('id').inTable('attendances').onDelete('CASCADE');
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable('services');
}
exports.down = down;
//# sourceMappingURL=004_services_table.js.map