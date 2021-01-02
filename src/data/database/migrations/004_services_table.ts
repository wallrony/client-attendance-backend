import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('services', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('price').notNullable();
    table.decimal('duration').notNullable();
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('services');
}
