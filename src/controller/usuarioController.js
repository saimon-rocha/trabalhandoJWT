import bcrypt from 'bcrypt';
import logger from '../config/logger.js';
import UsuarioDAO from '../dao/UsuarioDAO.js';

class UsuarioController {

  async index(req, res) {
    try {
      const usuarios = await UsuarioDAO.listar();

      return res.status(200).json({
        data: usuarios
      });

    } catch (error) {
      logger.error(error, 'Erro ao listar usuários');

      return res.status(500).json({
        error: 'Erro ao listar usuários'
      });
    }
  }

  async cad(req, res) {
    try {
      const { nm_usuario, email, senha } = req.body;

      if (!nm_usuario || !email || !senha) {
        return res.status(400).json({
          error: 'Nome, email e senha são obrigatórios'
        });
      }

      const usuarioExistente = await UsuarioDAO.buscarPorEmail(email);

      if (usuarioExistente) {
        return res.status(400).json({
          error: 'Email já cadastrado'
        });
      }

      const senhaHash = await bcrypt.hash(senha, 10);

      const novoUsuario = await UsuarioDAO.criar({
        nm_usuario,
        email,
        senha: senhaHash
      });

      return res.status(201).json({
        data: {
          cd_usuario: novoUsuario.cd_usuario,
          nm_usuario: novoUsuario.nm_usuario,
          email: novoUsuario.email
        }
      });

    } catch (error) {
      logger.error(error, 'Erro ao criar usuário');

      return res.status(500).json({
        error: 'Erro ao criar usuário'
      });
    }
  }

  async edit(req, res) {
    try {
      const { id } = req.params;
      const { nm_usuario, email } = req.body;

      if (!nm_usuario && !email) {
        return res.status(400).json({
          error: 'Informe ao menos um campo para atualizar'
        });
      }

      const [linhasAfetadas] = await UsuarioDAO.atualizar(id, {
        nm_usuario,
        email
      });

      if (!linhasAfetadas) {
        return res.status(404).json({
          error: 'Usuário não encontrado'
        });
      }

      return res.status(200).json({
        message: `Usuário ${id} atualizado`
      });

    } catch (error) {
      logger.error(error, 'Erro ao editar usuário');

      return res.status(500).json({
        error: 'Erro ao editar usuário'
      });
    }
  }

  async delet(req, res) {
    try {
      const { id } = req.params;

      const deletado = await UsuarioDAO.deletar(id);

      if (!deletado) {
        return res.status(404).json({
          error: 'Usuário não encontrado'
        });
      }

      return res.status(200).json({ message: "Usuario deletado com Sucesso" });

    } catch (error) {
      logger.error(error, 'Erro ao deletar usuário');

      return res.status(500).json({
        error: 'Erro ao deletar usuário'
      });
    }
  }
}

export default new UsuarioController();