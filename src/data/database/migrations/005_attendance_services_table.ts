import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('attendance_services', table => {
    table.integer('attendance_id').notNullable();
    table.integer('service_id').notNullable();

    table.foreign('attendance_id').references('id').inTable('attendances');
    table.foreign('service_id').references('id').inTable('services');
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('attendance_services');
}
