import Knex from 'knex';

import User from '../../../core/models/User';

export async function seed(knex: Knex) {
  const users: User[] = []

  users.push({
    name: 'Admin',
    birthday: '2000-01-01',
    email: 'admin@admin.com',
    password: '123456',
    is_admin: true,
  });

  users.push({
    name: 'User',
    birthday: '2000-01-01',
    email: 'user@user.com',
    password: '123456',
  });

  return await knex('users').insert(users);
}
