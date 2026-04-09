import generateToken from '../utils/jwt.js';
import UsuarioRepository from '../repositories/UsuarioRepository.js';
import logger from '../config/logger.js'
class GerarTokenController {
    async index(req, res) {
        try {
            const { email, senha } = req.body;

            if (!email || !senha) {
                return res.status(400).json({ message: 'Email e senha são obrigatórios' });
            }

            const usuario = await UsuarioRepository.buscarPorEmail(email);
            if (!usuario) return res.status(401).json({ message: 'Usuário ou senha inválidos' });

            const senhaValida = await UsuarioRepository.validarSenha(usuario, senha);
            if (!senhaValida) return res.status(401).json({ message: 'Usuário ou senha inválidos' });

            const { token, expiresIn, expiresInMinutes, expiresAt } = generateToken(usuario.cd_usuario);

            return res.json({ token, expiresIn, expiresInMinutes, expiresAt });

        } catch (error) {
            logger.info(error, "Ocorreu um erro na geração do Token");
            return res.status(500).json
        }
    }
}

export default new GerarTokenController();