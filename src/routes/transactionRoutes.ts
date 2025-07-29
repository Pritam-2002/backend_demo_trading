import { Router } from 'express';
import { getAccountSummary } from '../controllers/getTransactionController';

const router = Router();


router.get('/getaccountdetails', getAccountSummary);

export default router;