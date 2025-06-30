import { Router } from 'express';
import { getSegment, updateSegment } from '../controllers/brokerageController';

const router = Router();

router.get('/segment', getSegment);
router.patch('/segment', updateSegment);

export default router;
