import { DataTypes } from 'sequelize';
import connection from '../database/conexao.js';

const Venda = connection.define('Venda', {
  cd_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cd_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dt_venda: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'vendas',
  freezeTableName: true,
  timestamps: false,
});

export default Venda;