import type { IOrderPayload } from '../types/order';
import axios from 'axios';

export const createtOrder = async (data: IOrderPayload) => {
  return axios.post('http://localhost:5000/api/orders', data);
};