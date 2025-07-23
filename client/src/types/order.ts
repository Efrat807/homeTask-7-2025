import type { IProduct } from "../models";

export interface ICartItem {
  product: IProduct;
  quantity: number;
  categoryName?: string; // Optional, if needed for display purposes
}

export interface IOrderPayload {
  fullName: string;
  address: string;
  email: string;
  items: ICartItem[];
}