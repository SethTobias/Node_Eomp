// Import the mysql2 Library/Framework
import mysql from 'mysql2';

// Import the 'config' function from the 'dotenv' library to load environment variables
import { config } from 'dotenv';

// Load environment variables from the '.env' file into process.env
config();

// Create a connection pool using mysql2
const pool = mysql.createPool({
  // MySQL database host (read from the environment variable)
  host: process.env.host,
  // MySQL database user (read from the environment variable)
  user: process.env.user,
  // MySQL database password (read from the environment variable)
  password: process.env.password,
  // MySQL database name (read from the environment variable)
  database: process.env.db,
  // Allow waiting for connections when the connection limit is reached
  waitForConnections: true,
  // Maximum number of connections in the pool
  connectionLimit: 10,
  // Maximum number of connection requests the pool will queue before returning an error
  queueLimit: 0
}).promise();

// Export the created connection pool for use in other parts of the application
export { pool };