import mysql from 'mysql';
import key from './key';

const pool= mysql.createPool(key.database);

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB conectada');
})

export default pool;

