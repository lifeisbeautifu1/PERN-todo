import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  password: '89179645957',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

export default pool;
