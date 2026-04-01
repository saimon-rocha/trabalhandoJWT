import { Router } from 'express';
import gerarToken from '../controller/gerarTokenController.js';

const router = Router();

// rota pública (sem middleware)
router.post('/', gerarToken.index);

export default router;