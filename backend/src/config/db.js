const dotenv = require('dotenv');
dotenv.config();

console.log(process.env); // Выведет все переменные окружения

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATANAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const connectDB = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to MySQL');
        connection.release();
    } catch (err) {
        console.error('Database connection failed!', err);
        process.exit(1);
    }
};

module.exports = { pool, connectDB };
