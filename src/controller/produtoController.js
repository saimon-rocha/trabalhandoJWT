import logger from "../config/logger.js";
import ProdutoDao from "../dao/ProdutoDao.js";

class ProdutoController {
    async index(req, res) {
        try {
            const produtos = await ProdutoDao.listar();
            return res.status(200).json({ data: produtos });
        } catch (error) {
            logger.error(error, 'Erro ao listar Produtos');
            return res.status(500).json({
                error: 'Error ao listar produtos'
            });
        }
    }

    async cad(req, res) {
        try {
            const { nm_produto, preco } = req.body;

            if (!nm_produto, !preco) {
                return res.status(400).json({
                    error: 'Nome e preco são obrigatórios'
                });
            }

            await ProdutoDao.criar({ nm_produto, preco});

            return res.status(201).json({
                sucess: 'Produto Cadastrado com sucesso!'
            });

        } catch (error) {
            logger.error(error, 'Erro ao cadastrar produto');

            return res.status(500).json({
                error: 'Erro ao criar produto'
            });
        }
    }

    async edit(req, res) {
        try {
            const { id } = req.params;
            const { nm_produto, preco } = req.body;

            if (!nm_produto, !preco) {
                return res.status(400).json({
                    error: 'Informe ao menos um campo para atualizar'
                });
            }

            const [linhasAfetadas] = await ProdutoDao.atualizar(id, {
                nm_produto, preco
            });

            if (!linhasAfetadas) {
                return res.status(404).json({
                    error: 'Produto não encontrado'
                });
            }

            return res.status(200).json({
                message: `Produto ${nm_produto} atualizado`
            });

        } catch (error) {
            logger.error(error, 'Erro ao editar produto');

            return res.status(500).json({
                error: 'Erro ao editar produto'
            });
        }
    }

     async delet(req, res) {
        try {
          const { id } = req.params;
    
          const deletado = await ProdutoDao.deletar(id);
    
          if (!deletado) {
            return res.status(404).json({
              error: 'Produto não encontrado'
            });
          }
    
          return res.status(200).json({ message: "Produto deletado com Sucesso" });
    
        } catch (error) {
          logger.error(error, 'Erro ao deletar produto');
    
          return res.status(500).json({
            error: 'Erro ao deletar produto'
          });
        }
      }
}

export default new ProdutoController;