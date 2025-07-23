import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type { ICartState } from './cartInterfaces';
import type { ICartItem } from '../../types/order';


const initialState: ICartState = {};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            const {quantity, product, categoryName } = action.payload;
            const categoryKey = categoryName || product.categoryId;
            
            if (!state[categoryKey]) {
                state[categoryKey] = [];
            }

            const existingProduct = state[categoryKey].find(item => item.product.name === product.name);

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                state[categoryKey].push({product, quantity, categoryName});
            }
        },
        clearCart: () => {
            return {};
        },
    },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;