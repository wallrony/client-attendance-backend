import Knex from 'knex';

export async function up(knex: Knex) {
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

export async function down(knex: Knex) {
  return await knex.schema.dropTable('services');
}
