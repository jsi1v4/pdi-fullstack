require('dotenv').config();

const env = {
  env: process.env.NODE_ENV,
  dbUser: process.env.POSTGRES_USER,
  dbPassword: process.env.POSTGRES_PASSWORD,
  dbHost: process.env.POSTGRES_HOST,
  dbPort: process.env.POSTGRES_PORT,
  dbName: process.env.POSTGRES_DB,
};

export default env;
