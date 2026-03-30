const jwtService = require('../utils/jwt');
const UsuarioRepository = require('../repositories/UsuarioRepository');

class GerarTokenController {
    async index(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }

        const usuario = await UsuarioRepository.buscarPorEmail(email);
        if (!usuario) return res.status(401).json({ message: 'Usuário ou senha inválidos' });

        const senhaValida = await UsuarioRepository.validarSenha(usuario, senha);
        if (!senhaValida) return res.status(401).json({ message: 'Usuário ou senha inválidos' });

        const { token, expiresIn, expiresAt } = jwtService.generateToken(usuario.cd_usuario);

        return res.json({ token, expiresIn, expiresAt });
    }
}

module.exports = new GerarTokenController();