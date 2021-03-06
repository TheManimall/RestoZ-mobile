import axios from 'axios';

import * as Types from "../types";

export const addToCart = data => ({
  type: Types.ADD_TO_CART,
  payload: data,
});

const addOrderSuccess = data => ({
  type: Types.SIGN_UP_SUCCESS,
  payload: data
});

const addOrderFailure = err => ({
  type: Types.SIGN_UP_FAILURE,
  err
});

export const addOrder = data => async dispatch => {
  console.log(data)
  try {
    const res = await axios.post('http://192.168.0.153:5050/api/order/add', data);
    dispatch(signUpSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(signUpFailure(err));
  }
};

// export const addToCart = value => dispatch => dispatch(addCart(value));