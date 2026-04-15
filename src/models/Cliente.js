import { DataTypes } from 'sequelize';
import connection from '../database/conexao.js';

const Cliente = connection.define('Cliente', {
  cd_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nm_cliente: DataTypes.STRING,
}, {
  tableName: 'clientes',
  freezeTableName: true,
  timestamps: false,
});

export default Cliente;