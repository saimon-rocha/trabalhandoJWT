import { Router } from 'express';
import gerarToken from '../controller/gerarTokenController.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Geração de token JWT
 */

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Realiza login e retorna um token JWT
 *     tags: [Autenticação]
 *     description: |
 *       Gere um token JWT para autenticação.
 *       Esse token deve ser utilizado nas rotas protegidas, como /usuarios.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: usuario@email.com
 *             senha: 123456
 *     responses:
 *       200:
 *         description: Token gerado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *               expiresIn: "600"
 *               expiresInMinutes: "10"
 *               expiresAt: "2026-04-09T12:00:00.000Z"
 *       400:
 *         description: Email e senha obrigatórios
 *       401:
 *         description: Usuário ou senha inválidos
 *       500:
 *         description: Erro ao gerar token
 */

// rota pública (sem middleware)
router.post('/', gerarToken.index);

export default router;