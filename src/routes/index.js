import { Router } from 'express';

import authRoutes from './authRoutes.js';
import inicialRoutes from './inicialRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/inicial', inicialRoutes);

export default router;