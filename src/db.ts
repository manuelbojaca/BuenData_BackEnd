import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  port: parseInt(process.env.PG_PORT || '', 10),
  password: process.env.PG_PASS,
});

export default pool;
