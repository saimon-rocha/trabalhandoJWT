import Usuario from '../models/Usuario.js';

class UsuarioDAO {
  async listar() {
    return await Usuario.findAll({
      attributes: ['cd_usuario', 'nm_usuario', 'email']
    });
  }

  async buscarPorEmail(email) {
    return await Usuario.findOne({ where: { email } });
  }

  async criar(dados) {
    return await Usuario.create(dados);
  }

  async atualizar(id, dados) {
    return await Usuario.update(dados, {
      where: { cd_usuario: id }
    });
  }

  async deletar(id) {
    return await Usuario.destroy({
      where: { cd_usuario: id }
    });
  }
}

export default new UsuarioDAO();