import { DataTypes } from 'sequelize';
import connection from '../database/conexao.js';

const Usuario = connection.define('Usuario', {
  cd_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nm_usuario: DataTypes.STRING,
  email: DataTypes.STRING,
  senha: DataTypes.STRING,
}, {
  tableName: 'usuarios',
  freezeTableName: true,
  timestamps: false,
});

export default Usuario;