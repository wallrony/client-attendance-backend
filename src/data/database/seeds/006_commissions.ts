import Knex from 'knex';
import Commission from 'src/core/models/Commission';

export async function seed(knex: Knex) {
  const commissions: Commission[] = []

  const actualDate = new Date();
  const date = `${actualDate.getFullYear()}-${actualDate.getMonth() + 1}-${actualDate.getDate()}T${actualDate.getHours()}:${actualDate.getMinutes()}:${actualDate.getSeconds()}.000Z`

  commissions.push({
    client_attendance_id: 3,
    doctor_id: 1,
    value: 135,
    date
  });

  return await knex('commissions').insert(commissions);
}
