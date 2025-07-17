import { json, Sequelize } from 'sequelize';
import { config } from 'dotenv';

config()

const data = {
  dbname :process.env.MYSQL_DATABASE,
  dbuser :process.env.MYSQL_USER,
  dbpassword :process.env.MYSQL_PASSWORD,
}

const {dbname, dbuser, dbpassword} = data

export const sequelize = new Sequelize( dbname, dbuser, dbpassword, {
  dialect: 'mysql',
  port: 3306,
  host: 'localhost',
  logging: false
});