const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bookstore_schema',
    password: 'ThaonghekhongrO@'
});
let db = pool.promise();

module.exports = db;