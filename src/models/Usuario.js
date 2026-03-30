// src/models/Usuario.js
class Usuario {
    constructor({ cd_usuario = null, nm_usuario, email, senha }) {
        this.cd_usuario = cd_usuario;
        this.nm_usuario = nm_usuario;
        this.email = email;
        this.senha = senha; // aqui ainda é hash se for persistir
    }

    // método para transformar em JSON sem expor senha
    toJSON() {
        return {
            cd_usuario: this.cd_usuario,
            nm_usuario: this.nm_usuario,
            email: this.email,
        };
    }
}

module.exports = Usuario;