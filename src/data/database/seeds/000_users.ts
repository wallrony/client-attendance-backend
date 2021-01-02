import Knex from 'knex';

import User from '../../../core/models/User';

export async function seed(knex: Knex) {
  const users: User[] = []

  users.push({
    id: 1,
    name: 'Admin',
    birthday: '2000-01-01',
    email: 'admin@admin.com',
    password: '123456',
    is_admin: true,
  });

  users.push({
    id: 2,
    name: 'Doctor',
    birthday: '2000-01-01',
    email: 'doc@doc.com',
    password: '123456',
    is_admin: false,
  });

  users.push({
    id: 3,
    name: 'User',
    birthday: '2000-01-01',
    email: 'user@user.com',
    password: '123456',
    is_admin: false,
  });

  return await knex('users').insert(users);
}
