const express = require('express');
const routes = express.Router();
const inicialController = require('../controller/InicialController');
const gerarToken = require('../controller/gerarTokenController');
const authMiddleware = require('../middleware/auth.middleware');

// login / gerar token → SEM middleware
routes.post("/gerarToken", gerarToken.index);

// rotas protegidas → COM middleware
routes.get("/", authMiddleware, inicialController.index);
routes.post("/", authMiddleware, inicialController.cad);
routes.put("/edit", authMiddleware, inicialController.edit);
routes.delete("/delete", authMiddleware, inicialController.delet);

module.exports = routes;