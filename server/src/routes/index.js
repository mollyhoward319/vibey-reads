import { Router } from 'express';
import apiRoutes from './api/index.js';

const router = Router();

router.use('/api', apiRoutes);

export default router;
// activyt 14.3.insmodels

// done

// all API folder logic is pulled here to be used.