import { PortfolioResponse } from '../constant/db/dummyDB'; // adjust the path as needed

export const getPortfolioSummary = (req: any, res: any) => {
    try {
        return res.status(200).json(PortfolioResponse);
    } catch (error) {
        console.error('Error fetching portfolio summary:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
