import Produto from '../models/Produto.js';

class ProdutoDao {
    async listar() {
        return await Produto.findAll({
            attributes: ['cd_produto', 'nm_produto', 'preco']
        });
    }

    async criar(dados) {
        return await Produto.create(dados);
    }

    async atualizar(id, dados) {
        return await Produto.update(dados, {
            where: { cd_produto: id }
        });
    }

    async deletar(id) {
        return await Produto.destroy({
            where: { cd_produto: id }
        });
    }
}

export default new ProdutoDao();