import { Router } from 'express';

import authRoutes from './authRoutes.js';
import usuarioRoutes from './usuarioRoutes.js';
import clienteRoutes from './clienteRoutes.js';
import produtoRoutes from './produtoRoutes.js';


const router = Router();

router.use('/auth', authRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/clientes', clienteRoutes);
router.use('/produtos', produtoRoutes)


export default router;