import fs from 'fs';
import pool from './sqlConnection.js';

// Read the schema file
const schema = fs.readFileSync('./schema.sql', 'utf8');

// Run the schema script
pool.query(schema, (err, results) => {
    if (err) throw err;
    console.log('Database schema created successfully');
    pool.end(); // Close the connection pool
});