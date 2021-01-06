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

  const result = await knex('attendances').insert(attendances);

  return result;
}
