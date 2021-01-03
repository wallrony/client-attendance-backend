"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email', 50).unique().notNullable();
        table.string('password', 60).notNullable();
        table.timestamp('birthday').notNullable();
        table.boolean('is_admin').defaultTo(false);
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable('users');
}
exports.down = down;
//# sourceMappingURL=000_users_table.js.map