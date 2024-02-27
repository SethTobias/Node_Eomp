// Import the mysql2 Library/Framework
import mysql from 'mysql2';

import {config} from 'dotenv';
config(); 

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.db,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

// .promise() ??
export { pool };
