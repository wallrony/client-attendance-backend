import knex from 'knex';
import { getDatabaseConfiguration } from '../../core/utils/DatabaseUtils';

export function createConnection() {
  return knex(getDatabaseConfiguration())
}
