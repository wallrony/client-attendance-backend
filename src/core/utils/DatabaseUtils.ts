import Knex from 'knex';

import path from 'path';

require('dotenv-safe').config();

const devConfig: Knex.Config<any> = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    ssl: false
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'data', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'data', 'database', 'seeds'),
  },
  pool: {
    min: 3,
    max: 10
  },
  useNullAsDefault: true,
};

const prodConfig = devConfig;

export function getDatabaseConfiguration() {
  const state = process.env.APPLICATION_STATE;

  if(state === 'production') {
    return prodConfig;
  } else {
    return devConfig;
  }
}