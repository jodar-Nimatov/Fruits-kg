import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Function to load cart items from localStorage
const loadCartItemsFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return {items: savedCart ? JSON.parse(savedCart) : [], total: +localStorage.getItem('total') || 0};
};

// Function to save cart items to localStorage
const saveCartToLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state.items));
  localStorage.setItem('total', JSON.stringify(state.items.reduce((total, item) => total + (item.price * item.quantity), 0) + state.delivery));
};

export const postData = createAsyncThunk('cart/postData', async (requestData) => {
  try {
    const response = await axios.post('https://fruitstore.pp.ua/api/main/telegram-messages/send_message/', requestData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartItemsFromLocalStorage().items,
    status: 'idle',
    error: null,
    delivery: 200,
    total: loadCartItemsFromLocalStorage().total,
    perror: null,
    pstatus: 'idle',
    responseData: null,
  },
  reducers: {
    addDelToCart: (state, action) => {
      state.delivery = action.payload;
      saveCartToLocalStorage(state)
    },
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, price, quantity: 1, image });
      }
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(state);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        saveCartToLocalStorage(state);
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(postData.pending, (state) => {
      state.pstatus = 'loading'; // Устанавливаем статус loading при начале запроса
      state.perror = null; // Сбрасываем ошибки
      state.responseData = null; // Сбрасываем данные ответа
    })
    .addCase(postData.fulfilled,  (state, action) => {
      state.pstatus = 'succeeded'; // Устанавливаем статус succeeded при успешном выполнении запроса
      state.responseData = action.payload; // Записываем данные ответа
    })
    .addCase(postData.rejected, (state, action) => {
      state.pstatus = 'failed'; // Устанавливаем статус failed при неудаче
      state.perror = action.error.message; // Записываем сообщение об ошибке
    })
  },
});

export const { addToCart, removeFromCart, updateQuantity, addDelToCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartError = (state) => state.cart.error;
export const selectCartTotalPrice = () => +localStorage.getItem('total') || 0;

export default cartSlice.reducer;
