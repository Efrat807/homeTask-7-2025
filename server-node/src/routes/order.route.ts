import { Router } from 'express';
import { createOrder } from '../controllers/oreder.controller';

const router = Router();

router.post('/orders', createOrder);

export default router;
