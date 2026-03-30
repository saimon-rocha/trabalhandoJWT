const express = require('express');
require('dotenv').config();

const db = require('./database/db');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

// 👇 testa banco antes de subir
db.query('SELECT NOW()')
    .then(() => {
        console.log('Banco conectado com sucesso');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar no banco:', err);
    });