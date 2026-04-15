import { Router } from 'express';

import authRoutes from './authRoutes.js';
import usuarioController from './usuarioRoutes.js';
import clienteController from './clienteRoutes.js';


const router = Router();

router.use('/auth', authRoutes);
router.use('/usuarios', usuarioController);
router.use('/clientes', clienteController);


export default router;