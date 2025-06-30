import express from 'express';
import brokerageRoutes from './routes/brokerageRoutes';
import cors from 'cors'

const PORT = 3000;

const app = express();

app.use(cors()) // enable CORS for all origins

app.use(express.json());  // for JSON payloads
app.use(express.urlencoded({ extended: true }));  // for form data

// Routes
app.use('/api/brokerage', brokerageRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
