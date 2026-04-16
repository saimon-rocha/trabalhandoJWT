import { Router } from 'express';
import ClienteController from '../controller/clienteController.js';
import authMiddleware from '../middleware/auth.middleware.js';
/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Gestão de clientes
 */

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - cd_cliente: 1
 *                   nm_cliente: João Silva
 *                 - cd_cliente: 2
 *                   nm_cliente: Maria Oliveira
 */

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cadastra um novo cliente
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nm_cliente: João Silva
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     tags: [Clientes]
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
 *             nm_cliente: João Atualizado
 *     responses:
 *       200:
 *         description: Cliente atualizado
 *       404:
 *         description: Cliente não encontrado
 */

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Deleta um cliente
 *     tags: [Clientes]
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
 *         description: Cliente deletado com sucesso
 *       404:
 *         description: Cliente não encontrado
 */

const router = Router();

// aplica middleware em todas as rotas abaixo
router.use(authMiddleware);

router.get('/', ClienteController.index);
router.post('/', ClienteController.cad);
router.put('/:id', ClienteController.edit);
router.delete('/:id', ClienteController.delet);

export default router;