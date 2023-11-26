import mysql from 'mysql';

const pool = mysql.createPool({
  host: "localhost",
  user: "abdullah",
  password: 'GrizzlyBear.001',
  database: 'first_database'
});

export default pool;
