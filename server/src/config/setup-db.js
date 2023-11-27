import fs from 'fs';
import pool from './sqlConnection.js';
//import path from "path";
//import { fileURLToPath } from 'url';

const setupDatabase = () => {
   // const __filename = fileURLToPath(import.meta.url);
   // const __dirname = path.dirname(__filename);

    void pool.getConnection((err) => {
        if (err) throw err;
        const schemaCreateQuery = ("CREATE SCHEMA IF NOT EXISTS first_db")
        const useSchemaQuery = ("USE first_db")
        const createTableQuery = ("CREATE TABLE IF NOT EXISTS first_table (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT, city VARCHAR(255))")
        const insertDataQuery = ("INSERT INTO first_table (name, age, city) VALUES ('Abdullah', 22, 'Karachi'), ('Ali', 23, 'Lahore'), ('Ahmed', 24, 'Islamabad')")
      //  const schemaPath = path.join(__dirname, 'schema.sql');
       // const createDatabaseQuery = fs.readFileSync(schemaPath, 'utf8');
        pool.query(schemaCreateQuery, (err, result) => {
            if (err) throw err;
            console.log(result);
            });
        pool.query(useSchemaQuery, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
        pool.query(createTableQuery, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
        pool.query(insertDataQuery, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
        });
};

export default setupDatabase;