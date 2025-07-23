
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/productsAPI';

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async (categoryId: number) => {
    return await fetchProducts(categoryId);
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(loadProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productsSlice.reducer;
