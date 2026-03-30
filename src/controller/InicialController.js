const logger = require('../config/logger');

class InicialController {
    async index(req, res) {
        try {
            return res.status(200).json({ message: 'Index funcionando' });
        } catch (error) {
            logger.error(error, 'Erro no index');
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async cad(req, res) {
        try {
            return res.status(201).json({ message: 'Cadastro funcionando' });
        } catch (error) {
            logger.error(error, 'Erro no cadastro');
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async edit(req, res) {
        try {
            return res.status(200).json({ message: 'Editar funcionando' });
        } catch (error) {
            logger.error(error, 'Erro ao editar');
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async delet(req, res) {
        try {
            return res.status(200).json({ message: 'Deletar funcionando' });
        } catch (error) {
            logger.error(error, 'Erro ao deletar');
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}

module.exports = new InicialController();