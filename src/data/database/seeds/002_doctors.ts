import Knex from 'knex';

import Doctor from '../../../core/models/Doctor';

export async function seed(knex: Knex) {
  const doctors: Doctor[] = [];

  doctors.push({
    user_id: 0,
    attendance_id: 1,
    crm: '00/0000-000',
    name: 'Doctor',
    birthday: '2000-01-01',
    email: 'doc@doc.com',
    password: '123456',
  });

  for(const doctor of doctors) {
    const trx = await knex.transaction();

    const data: Record<string, any> = { ...doctor };

    delete data['user_id'];
    delete data['attendance_id'];
    delete data['crm'];

    const row = await trx('users').insert(data).returning('id');

    if(row) {
      const secondRow = await trx('doctors').insert({
        crm: doctor.crm,
        user_id: row[0],
        attendance_id: doctor.attendance_id,
      }).returning('id');

      if(secondRow) {
        await trx.commit();
      }
    }
  }
}
