import { DataTypes } from 'sequelize';
import connection from '../database/conexao.js';

const ItemVenda = connection.define('ItemVenda', {
  cd_venda: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  cd_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
}, {
  tableName: 'itens_venda',
  freezeTableName: true,
  timestamps: false,
});

export default ItemVenda;