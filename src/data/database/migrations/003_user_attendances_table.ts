import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('user_attendances', table => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.integer('attendance_id').notNullable();
    table.integer('doctor_id').nullable();
    table.timestamp('date', {
      useTz: true,
    }).notNullable();
    table.string('status', 13).nullable();

    table.foreign('user_id').references('id').inTable('users');
    table.foreign('attendance_id').references('id').inTable('attendances').onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('user_attendances');
}
