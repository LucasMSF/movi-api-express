import dotenv from 'dotenv';
import { Sequelize } from 'sequelize'

const env = dotenv.config().parsed;

export const sequelize = new Sequelize(env!.DB_DATA, env!.DB_USER, env!.DB_PASSWORD, {
    host: env!.DB_HOST,
    dialect: 'mysql'
});



