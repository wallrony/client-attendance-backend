import Knex from 'knex';
import { getDatabaseConfiguration } from '../../core/utils/DatabaseUtils';

const connection = Knex(getDatabaseConfiguration());

export default connection;
