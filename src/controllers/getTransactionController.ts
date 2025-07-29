import { accountsummary } from '../constant/db/dummyDB'; // adjust the path as needed

export const getAccountSummary = (req: any, res: any) => {
    try {
        return res.status(200).json(accountsummary);
    } catch (error) {
        console.error('Error fetching account summary:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
