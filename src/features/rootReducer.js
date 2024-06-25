import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import productReducer from './productSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
});

export default rootReducer;
