class inicialController {
    async index(req, res) {
        res.send("Index funcionando");
    }

    async cad(req, res) {
        res.send("Cadastro funcionando");
    }

    async edit(req, res) {
        res.send("Editar funcionando");
    }

    async delet(req, res) {
        res.send("Deletar funcionando");
    }
}

module.exports = new inicialController();