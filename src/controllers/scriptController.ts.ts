
import {
    blockedScripts,
    qtySettings,
    scriptUpdates
} from '../constant/db/dummyDB';

// 1. Get Blocked Scripts
export const getBlockedScripts = (req: any, res: any) => {
    try {
        return res.status(200).json(blockedScripts);
    } catch (error) {
        console.error('Error getting blocked scripts:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// 2. Get Qty Settings
export const getQtySettings = (req: any, res: any) => {
    try {
        return res.status(200).json(qtySettings);
    } catch (error) {
        console.error('Error getting qty settings:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// 3. Get Script Updates
export const getScriptUpdates = (req: any, res: any) => {
    try {
        return res.status(200).json(scriptUpdates);
    } catch (error) {
        console.error('Error getting script updates:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
