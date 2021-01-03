import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email', 50).unique().notNullable();
    table.string('password', 60).notNullable()
    table.timestamp('birthday').notNullable();
    table.boolean('is_admin').defaultTo(false);
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('users');
}
