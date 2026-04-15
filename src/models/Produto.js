import { DataTypes } from 'sequelize';
import connection from '../database/conexao.js';

const Produto = connection.define('Produto', {
  cd_produto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nm_produto: DataTypes.STRING,
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
}, {
  tableName: 'produtos',
  freezeTableName: true,
  timestamps: false,
});

export default Produto;