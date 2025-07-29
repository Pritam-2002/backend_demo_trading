import { Router } from 'express';
import { getPortfolioSummary } from '../controllers/portfplioController';

const router = Router();


router.get('/portfolio', getPortfolioSummary);

export default router;