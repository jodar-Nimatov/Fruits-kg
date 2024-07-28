// src/features/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from './productsSlice';

// Async thunk для получения продукта по ID
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const response = await fetch(`https://adikmarket.kg/api/main/products/${productId}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    product: null, // Добавляем поле для одного продукта
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload; // Записываем полученный продукт в состояние
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectProduct = (state) => state.product.product; // Селектор для получения продукта
export const selectProductLoading = (state) => state.products.status === 'loading'; // Селектор для состояния загрузки
export const selectProductError = (state) => state.products.error; // Селектор для ошибки загрузки

export default productSlice.reducer;
