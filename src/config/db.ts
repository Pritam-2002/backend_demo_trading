// db.ts
import { Pool } from 'pg';

export const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
});
