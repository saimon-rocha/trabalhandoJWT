import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.js';

const connection = new Sequelize(dbConfig);

export default connection;