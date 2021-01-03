import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('user_attendance_services', table => {
    table.integer('user_attendance_id').notNullable();
    table.integer('service_id').notNullable();

    table.foreign('user_attendance_id').references('id').inTable('user_attendances').onDelete('CASCADE');
    table.foreign('service_id').references('id').inTable('services').onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('user_attendance_services');
}
