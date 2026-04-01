import bcrypt from 'bcrypt';
import Usuario from '../models/Usuario.js';

class UsuarioRepository {
  async criar(usuario) {
    const senhaHash = await bcrypt.hash(usuario.senha, 10);

    return Usuario.create({
      nm_usuario: usuario.nm_usuario,
      email: usuario.email,
      senha: senhaHash,
    });
  }

  async buscarPorEmail(email) {
    return Usuario.findOne({
      where: { email }
    });
  }

  async validarSenha(usuario, senhaDigitada) {
    return bcrypt.compare(senhaDigitada, usuario.senha);
  }
}

export default new UsuarioRepository();