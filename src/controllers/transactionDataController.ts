import { Request, Response } from 'express';
import { transactionData } from '../constant/db/dummyDB';

export const getAllTransactionsHistory = (req: Request, res: Response): void => {
    res.status(200).json({
        message: 'Transaction data fetched successfully',
        data: transactionData
    });
};
