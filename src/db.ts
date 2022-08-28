import { Pool } from 'pg';
import dotenv from 'dotenv';
/*
import url from 'url';

const params = url.parse(process.env.PG_URI as string);

const auth = params.auth.split(':');
*/
dotenv.config();

const pool = new Pool({
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  port: parseInt(process.env.PG_PORT || '', 10),
  password: process.env.PG_PASS,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
