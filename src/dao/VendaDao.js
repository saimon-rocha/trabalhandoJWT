import sequelize from '../database/conexao.js';
import Venda from '../models/Venda.js';
import ItemVenda from '../models/ItemVenda.js';
import Produto from '../models/Produto.js';
import Cliente from '../models/Cliente.js';

class VendaDao {

    async listar() {
        const query = `
            SELECT 
                v.cd_venda,
                c.nm_cliente,
                v.dt_venda
            FROM vendas v
            JOIN clientes c ON c.cd_cliente = v.cd_cliente
            ORDER BY v.cd_venda DESC
        `;

        const [results] = await sequelize.query(query);
        return results;
    }

    async criarVendaCompleta({ cd_cliente, cd_usuario, itens }) {
        const t = await sequelize.transaction();

        try {
            // valida cliente
            const cliente = await Cliente.findByPk(cd_cliente);
            if (!cliente) throw new Error('Cliente não encontrado');

            const venda = await Venda.create({
                cd_cliente,
                cd_usuario,
                dt_venda: new Date()
            }, { transaction: t });

            for (const item of itens) {

                const produto = await Produto.findByPk(item.cd_produto);

                if (!produto) {
                    throw new Error(`Produto ${item.cd_produto} não encontrado`);
                }

                await ItemVenda.create({
                    cd_venda: venda.cd_venda,
                    cd_produto: produto.cd_produto,
                    quantidade: item.quantidade,
                    valor_unitario: produto.preco
                }, { transaction: t });
            }

            await t.commit();
            return venda;

        } catch (error) {
            await t.rollback();
            throw error;
        }
    }

    async editarVenda(id, { cd_cliente, itens }) {
        const t = await sequelize.transaction();

        try {
            const venda = await Venda.findByPk(id);

            if (!venda) return false;

            await Venda.update(
                { cd_cliente },
                { where: { cd_venda: id }, transaction: t }
            );

            // remove itens antigos
            await ItemVenda.destroy({
                where: { cd_venda: id },
                transaction: t
            });

            // recria itens
            for (const item of itens) {
                const produto = await Produto.findByPk(item.cd_produto);

                if (!produto) {
                    throw new Error(`Produto ${item.cd_produto} não encontrado`);
                }

                await ItemVenda.create({
                    cd_venda: id,
                    cd_produto: produto.cd_produto,
                    quantidade: item.quantidade,
                    valor_unitario: produto.preco
                }, { transaction: t });
            }

            await t.commit();
            return true;

        } catch (error) {
            await t.rollback();
            throw error;
        }
    }

    async deletarVenda(id) {
        const t = await sequelize.transaction();

        try {
            // 1. deleta itens
            await ItemVenda.destroy({
                where: { cd_venda: id },
                transaction: t
            });

            // 2. deleta venda
            const deletado = await Venda.destroy({
                where: { cd_venda: id },
                transaction: t
            });

            await t.commit();

            return deletado;

        } catch (error) {
            await t.rollback();
            throw error;
        }
    }
}

export default new VendaDao();