import express from 'express';
import brokerageRoutes from './routes/brokerageRoutes';
import scriptRoutes from './routes/scriptRoutes';
import authRoutes from "./routes/authRoutes"
import portfolioRoutes from "./routes/portFolioRoute"
import accountDetailsRoutes from './routes/transactionRoutes'
import transactionHistoryroutes from './routes/refreshRoutes'
import cors from 'cors'

const PORT = 3000;

const app = express();

app.use(cors()) // enable CORS for all origins

app.use(express.json());  // for JSON payloads
app.use(express.urlencoded({ extended: true }));  // for form data

// Routes
app.use('/api/brokerage', brokerageRoutes);
app.use('/api/scripts', scriptRoutes);
app.use('/api/user', authRoutes);
app.use('/api/account', accountDetailsRoutes);
app.use('/api', portfolioRoutes);
app.use('/api', transactionHistoryroutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
