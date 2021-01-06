import Knex from 'knex';
import Commission from 'src/core/models/Commission';
import { getActualDate } from 'src/core/utils/DateUtils';

export async function seed(knex: Knex) {
  const commissions: Commission[] = []

  const date = getActualDate();

  commissions.push({
    client_attendance_id: 3,
    doctor_id: 1,
    value: 135,
    date
  });

  return await knex('commissions').insert(commissions);
}
