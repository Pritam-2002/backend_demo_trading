import { Router } from 'express';
import { getAllTransactionsHistory } from '../controllers/transactionDataController';

const router = Router();


router.get('/getalltransactionhistory', getAllTransactionsHistory);

export default router;