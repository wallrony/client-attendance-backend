import Knex from 'knex';
import Attendance from '../../../core/models/Attendance';

export async function seed(knex: Knex) {
  const attendances: Attendance[] = [];

  attendances.push({
    title: 'Consulta de vista',
  });

  attendances.push({
    title: 'Revisão Dentária',
  });

  return await knex('attendances').insert(attendances);
}
