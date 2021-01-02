import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('attendances', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('attendances');
}
