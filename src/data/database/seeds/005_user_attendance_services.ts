import Knex from 'knex';
import UserAttendanceService from 'src/core/models/UserAttendanceService';

export async function seed(knex: Knex) {
  const userAttendanceServices: UserAttendanceService[] = []

  userAttendanceServices.push({
    service_id: 1,
    user_attendance_id: 1
  });
  
  userAttendanceServices.push({
    service_id: 2,
    user_attendance_id: 1
  });

  userAttendanceServices.push({
    service_id: 4,
    user_attendance_id: 2
  });

  userAttendanceServices.push({
    service_id: 2,
    user_attendance_id: 3
  });

  return await knex('user_attendance_services').insert(userAttendanceServices);
}
