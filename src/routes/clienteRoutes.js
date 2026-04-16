import { Router } from 'express';
import ClienteController from '../controller/clienteController.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

// aplica middleware em todas as rotas abaixo
router.use(authMiddleware);

router.get('/', ClienteController.index);
router.post('/', ClienteController.cad);
router.put('/:id', ClienteController.edit);
router.delete('/:id', ClienteController.delet);

export default router;