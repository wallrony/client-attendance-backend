import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('commissions', table => {
    table.increments('id').primary();
    table.integer('doctor_id').notNullable();
    table.integer('client_attendance_id').notNullable();

    table.foreign('doctor_id').references('id').inTable('doctors');
    table.foreign('client_attendance_id').references('id').inTable('users');
  })
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('commissions');
}
