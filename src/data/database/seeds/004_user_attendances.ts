import Knex from 'knex';
import UserAttendance from 'src/core/models/UserAttendance';

export async function seed(knex: Knex) {
  const userAttendances: UserAttendance[] = []

  userAttendances.push({
    attendance_id: 1,
    date: '2020-01-06T16:00:00.000Z',
    status: 'not-realized',
    user_id: 2,
  });

  userAttendances.push({
    attendance_id: 2,
    date: '2020-01-06T16:30:00.000Z',
    status: 'not-realized',
    user_id: 2,
  });

  userAttendances.push({
    attendance_id: 1,
    date: '2020-01-05T16:30:00.000Z',
    user_id: 2,
    status: 'realized',
    doctor_id: 1,
  });

  return await knex('user_attendances').insert(userAttendances);
}
