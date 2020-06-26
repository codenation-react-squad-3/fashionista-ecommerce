import { combineReducers } from "redux";
import products from './productsReducer';
import cartProducts from './cartReducer';

export default combineReducers({
  products,
  cartProducts
});