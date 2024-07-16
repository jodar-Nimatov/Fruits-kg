import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk для получения всех продуктов
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fruitstore.pp.ua/api/main/products/');
    const data = await response.json();
    return data;
  }
);

export const fetchCatalogs = createAsyncThunk(
  'products/fetchCatalogs',
  async () => {
    const response = await fetch('https://fruitstore.pp.ua/api/main/catalogs');
    const data = await response.json();
    return data;
  }
);

// Async thunk для получения информации о конкретном товаре
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const response = await fetch(`https://fruitstore.pp.ua/api/main/products/${productId}`);
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    catalogs: [],
    cstatus: 'idle',
    status: 'idle',
    error: null,
    cerror: null,
    filterId: 0, // добавили фильтр в состояние
  },
  reducers: {
    setFilter: (state, action) => {
      state.filterId = action.payload;
    },
  },
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
      .addCase(fetchCatalogs.pending, (state) => {
        state.cstatus = 'loading';
      })
      .addCase(fetchCatalogs.fulfilled, (state, action) => {
        state.cstatus = 'succeeded';
        state.catalogs = action.payload;
      })
      .addCase(fetchCatalogs.rejected, (state, action) => {
        state.cstatus = 'failed';
        state.cerror = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setFilter } = productsSlice.actions;

export const selectAllProducts = (state) => state.products.items;
export const selectCatalogs = (state) => state.products.catalogs;
export const selectFilter = (state) => state.products.filterId;

export const selectFilteredProducts = (state) => {
  const filterId = state.products.filterId;
  const items = state.products.items;

  if (filterId === 0) {
    return items;
  } else {
    return items.filter(item => item.catalog === filterId)
  }
};


export default productsSlice.reducer;
