import Cliente from '../models/Cliente.js';

class ClienteDao {
    async listar() {
        return await Cliente.findAll({
            attributes: ['cd_cliente', 'nm_cliente']
        });
    }

    async criar(dados) {
        return await Cliente.create(dados);
    }

    async atualizar(id, dados) {
        return await Cliente.update(dados, {
            where: { cd_cliente: id }
        });
    }

    async deletar(id) {
        return await Cliente.destroy({
            where: { cd_cliente: id }
        });
    }


}

export default new ClienteDao();