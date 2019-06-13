import axios from 'axios';

import * as Types from "../types";

export const addToCart = data => ({
  type: Types.ADD_TO_CART,
  payload: data,
});

// export const addToCart = value => dispatch => dispatch(addCart(value));