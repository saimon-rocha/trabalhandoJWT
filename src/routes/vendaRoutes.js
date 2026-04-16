import { Router } from 'express';
import vendaController from '../controller/vendaController.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

// aplica middleware em todas as rotas abaixo
router.use(authMiddleware);

/**
 * @swagger
 * tags:
 *   name: Vendas
 *   description: Gestão de vendas com itens
 */

/**
 * @swagger
 * /vendas:
 *   get:
 *     summary: Lista todas as vendas
 *     tags: [Vendas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de vendas
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 - cd_venda: 1
 *                   cd_cliente: 1
 *                   cd_usuario: 3
 *                   dt_venda: 16/04/2026 21:31:20
 */

/**
 * @swagger
 * /vendas:
 *   post:
 *     summary: Cria uma venda com itens
 *     tags: [Vendas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             cd_cliente: 1
 *             cd_usuario: 3
 *             itens:
 *               - cd_produto: 1
 *                 quantidade: 1
 *               - cd_produto: 2
 *                 quantidade: 2
 *     responses:
 *       201:
 *         description: Venda criada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Venda criada com sucesso
 *               data:
 *                 cd_venda: 10
 *                 cd_cliente: 1
 *                 cd_usuario: 3
 *                 dt_venda: 16/04/2026 21:31:20
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /vendas/{id}:
 *   put:
 *     summary: Atualiza uma venda (cliente + itens)
 *     tags: [Vendas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             cd_cliente: 2
 *             itens:
 *               - cd_produto: 1
 *                 quantidade: 3
 *     responses:
 *       200:
 *         description: Venda atualizada
 *       404:
 *         description: Venda não encontrada
 */

/**
 * @swagger
 * /vendas/{id}:
 *   delete:
 *     summary: Deleta uma venda
 *     tags: [Vendas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venda deletada com sucesso
 *       404:
 *         description: Venda não encontrada
 */

router.get('/', vendaController.index);
router.post('/', vendaController.cad);
router.put('/:id', vendaController.edit);
router.delete('/:id', vendaController.delete);

export default router;