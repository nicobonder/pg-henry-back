const { Pool } = require('pg');

// Create a new connection pool with the necessary database configuration
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true // Enable SSL/TLS for secure communication with the database
// });

// Create a new connection pool with the necessary database configuration
//deploy railway
const pool = new Pool({
//  connectionString: process.env.DATABASE_URL,
  connectionString: process.env.DB_DEPLOY, 
  ssl: true // Enable SSL/TLS for secure communication with the database
});

module.exports = pool;
