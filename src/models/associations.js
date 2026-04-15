import Cliente from './Cliente.js';
import Produto from './Produto.js';
import Venda from './Venda.js';
import ItemVenda from './ItemVenda.js';

// Cliente -> Venda
Cliente.hasMany(Venda, { foreignKey: 'cd_cliente' });
Venda.belongsTo(Cliente, { foreignKey: 'cd_cliente' });

// Usuario -> Venda (vendedor)
Usuario.hasMany(Venda, { foreignKey: 'cd_usuario' });
Venda.belongsTo(Usuario, { foreignKey: 'cd_usuario' });

// Venda -> Itens
Venda.hasMany(ItemVenda, { foreignKey: 'cd_venda' });
ItemVenda.belongsTo(Venda, { foreignKey: 'cd_venda' });

// Produto -> Itens
Produto.hasMany(ItemVenda, { foreignKey: 'cd_produto' });
ItemVenda.belongsTo(Produto, { foreignKey: 'cd_produto' });