const db = require('../database/db');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

class UsuarioRepository {
    static async criar(usuario) {
        const senhaHash = await bcrypt.hash(usuario.senha, 10);

        const result = await db.query(
            `INSERT INTO usuarios (nm_usuario, email, senha)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [usuario.nm_usuario, usuario.email, senhaHash]
        );

        return new Usuario(result.rows[0]);
    }

    static async buscarPorEmail(email) {
        const result = await db.query(
            `SELECT * FROM usuarios WHERE email = $1`,
            [email]
        );
        if (!result.rows[0]) return null;
        return new Usuario(result.rows[0]);
    }

    static async validarSenha(usuario, senhaDigitada) {
        return bcrypt.compare(senhaDigitada, usuario.senha);
    }
}

module.exports = UsuarioRepository;