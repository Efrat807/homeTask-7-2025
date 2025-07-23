import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  items: [
    {
      productId: String,
      productName: String,
      quantity: Number,
      price: Number,
    },
  ],
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);
