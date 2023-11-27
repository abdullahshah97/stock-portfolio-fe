import mysql from 'mysql';

const pool = mysql.createPool({
  host: "localhost",
  user: "abdullah",
  password: 'GrizzlyBear.001'
});

export default pool;