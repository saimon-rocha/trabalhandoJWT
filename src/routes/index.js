import { Router } from 'express';

import authRoutes from './authRoutes.js';
import usuarioRoutes from './usuarioRoutes.js';
import clienteRoutes from './clienteRoutes.js';
import produtoRoutes from './produtoRoutes.js';
import itemVendaRoutes from './itemVendaRoutes.js';
import vendaRoutes from './vendaRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/clientes', clienteRoutes);
router.use('/produtos', produtoRoutes);
router.use('/itemVendas', itemVendaRoutes);
router.use('/vendas', vendaRoutes);



export default router;