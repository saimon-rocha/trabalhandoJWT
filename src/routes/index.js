import { Router } from 'express';

import authRoutes from './authRoutes.js';
import usuarioController from './usuarioRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/usuarios', usuarioController);

export default router;