const express = require('express');
const routes = express.Router();
const inicialController = require('../controller/InicialController');

routes.get("/", inicialController.index);
routes.post("/", inicialController.cad);
routes.put("/edit", inicialController.edit);
routes.delete("/delete", inicialController.delet);

module.exports = routes;