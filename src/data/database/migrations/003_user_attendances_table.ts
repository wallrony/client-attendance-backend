import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('user_attendances', table => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.integer('attendance_id').notNullable();
    table.timestamp('date').notNullable();

    table.foreign('user_id').references('id').inTable('users');
    table.foreign('attendance_id').references('id').inTable('attendances');
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('user_attendances');
}
