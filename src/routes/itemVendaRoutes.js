import { Router } from 'express';
import ItemVendaController from '../controller/itemVendaController.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

// aplica middleware em todas as rotas abaixo
router.use(authMiddleware);

/**
 * @swagger
 * /itens-venda:
 *   get:
 *     summary: Lista todos os itens de vendas
 *     tags: [ItensVenda]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de itens de venda
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 - nm_cliente: João Silva
 *                   nm_produto: Notebook
 *                   quantidade: 1
 *                   valor_unitario: 3500.00
 *                   total: 3500.00
 *                   dt_venda: 16/04/2026 21:31:20
 *       500:
 *         description: Erro interno
 */
router.get('/', ItemVendaController.index);
router.post('/', ItemVendaController.cad);
router.put('/:id', ItemVendaController.edit);
router.delete('/:id', ItemVendaController.delete);

export default router;