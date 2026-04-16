import { Router } from 'express';
import ProdutoController from '../controller/produtoController.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

// aplica middleware em todas as rotas abaixo
router.use(authMiddleware);

router.get('/', ProdutoController.index);
router.post('/', ProdutoController.cad);
router.put('/:id', ProdutoController.edit);
router.delete('/:id', ProdutoController.delet);

export default router;