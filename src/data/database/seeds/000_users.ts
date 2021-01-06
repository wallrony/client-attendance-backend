import Knex from 'knex';

import User from '../../../core/models/User';
import { encriptPass } from '../../../core/utils/CryptoUtils';

export async function seed(knex: Knex) {
  const users: User[] = []

  users.push({
    name: 'Admin',
    birthday: '2000-01-01',
    email: 'admin@admin.com',
    password: encriptPass('123456'),
    is_admin: true,
  });

  users.push({
    name: 'User',
    birthday: '2000-01-01',
    email: 'user@user.com',
    password: encriptPass('123456'),
  });

  const result = await knex('users').insert(users);

  return result;
}
