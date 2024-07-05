import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice'

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer
});

export default rootReducer;
