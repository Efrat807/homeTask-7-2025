import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import orderRoutes from './routes/order.route';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', orderRoutes);

export default app;