import { combineReducers } from "redux";
import restaurantReducer from './restaurantReducer';
import dishReducer from './dishReducer';
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  dish: dishReducer,
  cart: cartReducer,
});

export default rootReducer;