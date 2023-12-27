import mysql from "mysql";
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection(process.env.DB_URL || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export default db;