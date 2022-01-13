import knex from 'knex';

import envs from '@/env';

const db = knex({
  client: 'postgres',
  connection: {
    host: envs.dbHost,
    port: Number(envs.dbPort),
    user: envs.dbUser,
    password: String(envs.dbPassword),
    database: envs.dbName,
  },
});

export default db;
