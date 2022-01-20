import knex from 'knex';

import env from '@/env';

const db = knex({
  client: 'postgres',
  connection: {
    host: env.dbHost,
    port: Number(env.dbPort),
    user: env.dbUser,
    password: String(env.dbPassword),
    database: env.dbName,
  },
});

export default db;
