import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('doctors', table => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.integer('attendance_id').notNullable();
    table.string('crm').notNullable();

    table.foreign('user_id').references('id').inTable('users').onDelete('NO ACTION');
    table.foreign('attendance_id').references('id').inTable('attendances');
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('doctors');
}
