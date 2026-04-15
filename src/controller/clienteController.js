import logger from "../config/logger.js";
import ClienteDao from "../dao/ClienteDao.js";

class ClienteController {
    async index(req, res) {
        try {
            const clientes = await ClienteDao.listar();
            return res.status(200).json({ data: clientes });
        } catch (error) {
            logger.error(error, 'Erro ao listar Clientes');
            return res.status(500).json({
                error: 'Error ao listar clientes'
            });
        }
    }

    async cad(req, res) {
        try {
            const { nm_cliente } = req.body;

            if (!nm_cliente) {
                return res.status(400).json({
                    error: 'Nome é obrigatório'
                });
            }

            await ClienteDao.criar({ nm_cliente });

            return res.status(201).json({
                sucess: 'Cliente Cadastrado com sucesso!'
            });

        } catch (error) {
            logger.error(error, 'Erro ao cadastrar cliente');

            return res.status(500).json({
                error: 'Erro ao criar cliente'
            });
        }
    }

    async edit(req, res) {
        try {
            const { id } = req.params;
            const { nm_cliente } = req.body;

            if (!nm_cliente) {
                return res.status(400).json({
                    error: 'Informe ao menos um campo para atualizar'
                });
            }

            const [linhasAfetadas] = await ClienteDao.atualizar(id, {
                nm_cliente
            });

            if (!linhasAfetadas) {
                return res.status(404).json({
                    error: 'Cliente não encontrado'
                });
            }

            return res.status(200).json({
                message: `Cliente ${id} atualizado`
            });

        } catch (error) {
            logger.error(error, 'Erro ao editar cliente');

            return res.status(500).json({
                error: 'Erro ao editar cliente'
            });
        }
    }

     async delet(req, res) {
        try {
          const { id } = req.params;
    
          const deletado = await ClienteDao.deletar(id);
    
          if (!deletado) {
            return res.status(404).json({
              error: 'Cliente não encontrado'
            });
          }
    
          return res.status(200).json({ message: "Cliente deletado com Sucesso" });
    
        } catch (error) {
          logger.error(error, 'Erro ao deletar cliente');
    
          return res.status(500).json({
            error: 'Erro ao deletar cliente'
          });
        }
      }
}

export default new ClienteController;