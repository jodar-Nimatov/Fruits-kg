import { createSlice } from "@reduxjs/toolkit";

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

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartItemsFromLocalStorage().items,
    status: 'idle',
    error: null,
    delivery: 0,
    total: loadCartItemsFromLocalStorage().total
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
});

export const { addToCart, removeFromCart, updateQuantity, addDelToCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartError = (state) => state.cart.error;
export const selectCartTotalPrice = () => +localStorage.getItem('total') || 0;

export default cartSlice.reducer;
