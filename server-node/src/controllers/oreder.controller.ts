import { Request, Response } from 'express';
import { Order } from '../models/order';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order(req.body);
    const saved = await newOrder.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};
