import sequelize from '../database/conexao.js'; // tua conexão

class ItemVendaDao {
    async listarCompleto() {
        const query = `
            SELECT
                v.cd_venda,
                c.nm_cliente,
                p.nm_produto,
                p.preco,
                iv.quantidade,
                iv.valor_unitario,
                (iv.quantidade * iv.valor_unitario) AS total,
                v.dt_venda
            FROM vendas v
            JOIN clientes c ON c.cd_cliente = v.cd_cliente
            JOIN itens_venda iv ON iv.cd_venda = v.cd_venda
            JOIN produtos p ON p.cd_produto = iv.cd_produto
        `;

        const [results] = await sequelize.query(query);

        return results;
    }
}

export default new ItemVendaDao();