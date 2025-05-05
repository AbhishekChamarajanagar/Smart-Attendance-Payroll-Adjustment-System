const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',          // Your PostgreSQL username
  host: 'localhost',         // Database server
  database: 'employee_db',   // Your database name
  password: 'Abhi@2003', // Your PostgreSQL password
  port: 5432,                // Default PostgreSQL port
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};