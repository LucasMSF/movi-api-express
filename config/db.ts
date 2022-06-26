import dotenv from 'dotenv';
import mysql from 'mysql2';

const env = dotenv.config().parsed;

const connection: mysql.Pool = mysql.createPool({
    host: env!.DB_HOST,
    user: env!.DB_USER,
    database: env!.DB_DATA,
    waitForConnections: true,
    connectionLimit: 50,
    queueLimit: 0
});

const getConnection = (): mysql.Pool => {
    return connection;
}

export default {
    getConnection
}