// dummyDB.ts

export interface BlockedScript {
    scriptName: string;
    blockedBy: string;
}

export interface User {
    id: string;
    name: string;
    role: 'admin' | 'moderator' | 'user';
    password: string
}

export interface QtySettingItem {
    id: string;
    name: string; // e.g., "Reliance", "HDFC", "TCS", etc. - can be changed
    isActive: boolean; // true/false status toggle
    orderRange: {
        min: number;
        max: number;
    };
    lotQuantity: number;
    lotRange: {
        min: number;
        max: number;
    };
}

export interface ScriptUpdate {
    id: string;
    timestamp: string; // e.g., "55 min", "60 min", "2 hr"
    message: string;
    createdAt: Date;
}

export interface Transaction {
    id: string;
    type: 'A1' | 'B1' | 'credit' | 'debit';
    transcationStatus: 'credit' | 'debit';
    date: string;
    amount: string;
    description?: string;
    idNumber?: string;
};

export interface AccountSummary {
    netBalance: string;
    transactions: Transaction[];
};


export interface PortfolioItem {
    id: number;
    ticker: string;
    name: string;
    type: string;
    quantity: number;
    price: number;
    todayQuantity: number;
    todayPrice: number;
    date: string | null;
}

export interface PortfolioResponse {
    message: string;
    portfolio: PortfolioItem[];
}

export interface PortfolioActionResponse {
    message: string;
}


export interface StockTransaction {
    stockName: string;
    companyName: string;
    transactionType: 'Instant Buy' | 'Instant Sell' | 'Limit Buy' | 'Limit Sell';
    quantity: number;
    datetime: string; // e.g., "10 Mar'24, 7:40 AM"
    price: number;
    orderStatus: 'Filled' | 'Pending' | 'Cancelled';
}

// Existing data
export const blockedScripts: BlockedScript[] = [
    { scriptName: 'Manappuram', blockedBy: 'NSW' },
    { scriptName: 'RBL Bank', blockedBy: 'BSW' },
];

export const users: User[] = [
    { id: 'u1', name: 'Alice', role: 'admin', password: '1234' },
    { id: 'u2', name: 'Bob', role: 'moderator', password: '123' },
];

// New data based on the UI
export const qtySettings: QtySettingItem[] = [
    {
        id: 'qty1',
        name: 'Reliance',
        isActive: true,
        orderRange: { min: 100, max: 25000 },
        lotQuantity: 20,
        lotRange: { min: 100, max: 25000 }
    },
    {
        id: 'qty2',
        name: 'HDFC Bank',
        isActive: true,
        orderRange: { min: 100, max: 25000 },
        lotQuantity: 20,
        lotRange: { min: 100, max: 25000 }
    },
    {
        id: 'qty3',
        name: 'TCS',
        isActive: false,
        orderRange: { min: 100, max: 25000 },
        lotQuantity: 20,
        lotRange: { min: 100, max: 25000 }
    }
];

export const scriptUpdates: ScriptUpdate[] = [
    {
        id: 'update1',
        timestamp: '55 min',
        message: 'Lorem Ipsum is simply dummy and typesetting industry.',
        createdAt: new Date(Date.now() - 55 * 60 * 1000)
    },
    {
        id: 'update2',
        timestamp: '60 min',
        message: 'Lorem Ipsum is simply dummy and typesetting industry. Lorem Ipsum has been the industry\'s',
        createdAt: new Date(Date.now() - 60 * 60 * 1000)
    },
    {
        id: 'update3',
        timestamp: '2 hr',
        message: 'Lorem Ipsum is simply dummy and typesetting industry.',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
    }
];

export const accountsummary: AccountSummary = {
    netBalance: "27,000",
    transactions: [
        {
            id: '1',
            type: 'A1',
            transcationStatus: 'credit',
            date: "10 Mar'24, 20 Mar'25",
            amount: '302.23',
            description: 'Download Report'
        },
        {
            id: '2',
            type: 'B1',
            transcationStatus: 'debit',
            date: '10-02-24, 20-03-25',
            amount: '302.23',
            description: 'Download Report'
        },
        {
            id: '3',
            type: 'credit',
            transcationStatus: 'credit',
            date: "10 Mar'24",
            idNumber: '1223-2223',
            amount: '302.23'
        },
        {
            id: '4',
            type: 'debit',
            transcationStatus: 'debit',
            date: '10-03-24',
            idNumber: '1223-2223',
            amount: '302.23'
        }
    ]
}

export const PortfolioResponse: PortfolioResponse = {
    message: "Portfolio fetched successfully",
    portfolio: [
        {
            id: 1,
            ticker: "AAPL",
            name: "Apple Inc.",
            type: "Stock",
            quantity: 50,
            price: 145.3,
            todayQuantity: 50,
            todayPrice: 147.2,
            date: "2025-07-18",
        },
        {
            id: 2,
            ticker: "GOOGL",
            name: "Alphabet Inc.",
            type: "Stock",
            quantity: 20,
            price: 2700.5,
            todayQuantity: 20,
            todayPrice: 2712.8,
            date: "2025-07-18",
        },
        {
            id: 3,
            ticker: "TSLA",
            name: "Tesla Inc.",
            type: "Stock",
            quantity: 10,
            price: 695.0,
            todayQuantity: 10,
            todayPrice: 700.0,
            date: null,
        },
    ],
};


export const transactionData: StockTransaction[] = [
    {
        stockName: "Reliance",
        companyName: "Reliance Industry LTD",
        transactionType: "Instant Buy",
        quantity: 5,
        datetime: "10 Mar'24, 7:40 AM",
        price: 203.23,
        orderStatus: "Filled",
    },
    {
        stockName: "TCS",
        companyName: "Tata Consultancy Services",
        transactionType: "Limit Sell",
        quantity: 10,
        datetime: "11 Mar'24, 9:30 AM",
        price: 3540.50,
        orderStatus: "Filled",
    },
    {
        stockName: "Infosys",
        companyName: "Infosys Ltd.",
        transactionType: "Limit Buy",
        quantity: 8,
        datetime: "12 Mar'24, 11:15 AM",
        price: 1470.00,
        orderStatus: "Pending",
    },
    {
        stockName: "HDFC Bank",
        companyName: "HDFC Bank Ltd.",
        transactionType: "Instant Sell",
        quantity: 3,
        datetime: "13 Mar'24, 10:05 AM",
        price: 1585.75,
        orderStatus: "Cancelled",
    },
    {
        stockName: "ITC",
        companyName: "ITC Ltd.",
        transactionType: "Limit Buy",
        quantity: 15,
        datetime: "14 Mar'24, 1:20 PM",
        price: 449.90,
        orderStatus: "Filled",
    },
];

