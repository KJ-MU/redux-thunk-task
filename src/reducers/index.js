import { combineReducers } from "redux";
import { productsReducer } from "./prodectsReducer";
import cartReducer, { cartProductsReducer } from "./cartProductsReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
