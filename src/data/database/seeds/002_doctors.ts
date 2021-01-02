import Knex from 'knex';
import Doctor from '../../../core/models/Doctor';

export async function seed(knex: Knex) {
  const doctors: Doctor[] = [];

  doctors.push({
    user_id: 2,
    attendance_id: 1,
    crm: '00/0000-000',
  });

  return await knex('doctors').insert(doctors);
}
