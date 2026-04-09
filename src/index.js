import express from 'express';
import 'dotenv/config';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

import conexao from './database/conexao.js';
import routes from './routes/index.js';
import logger from './config/logger.js';

const app = express();

app.use(express.json());
app.use(routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

// testa banco antes de subir
async function startServer() {
  try {
    await conexao.query('SELECT NOW()');

    logger.info('✅ Banco conectado com sucesso');

    app.listen(PORT, () => {
      logger.info(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro:', error.parent);
  }
}

startServer();