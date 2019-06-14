import { combineReducers } from "redux";
import restaurantReducer from './restaurantReducer';
import dishReducer from './dishReducer';
import cartReducer from "./cartReducer";
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form: form,
  restaurant: restaurantReducer,
  dish: dishReducer,
  cart: cartReducer,
});

export default rootReducer;