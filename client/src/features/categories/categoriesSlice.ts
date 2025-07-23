import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../../api/categoriesAPI';

export const loadCategories = createAsyncThunk(
  'categories/loadCategories',
  async () => {
    return await fetchCategories();
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(loadCategories.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default categoriesSlice.reducer;
