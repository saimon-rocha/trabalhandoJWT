import { Router } from 'express';
import inicialController from '../controller/InicialController.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

// aplica middleware em todas as rotas abaixo
router.use(authMiddleware);

router.get('/', inicialController.index);
router.post('/', inicialController.cad);
router.put('/edit', inicialController.edit);
router.delete('/delete', inicialController.delet);

export default router;