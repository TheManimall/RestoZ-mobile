import axios from 'axios';

import * as Types from '../types';

const signInSuccess = data => ({
  type: Types.SIGN_IN_SUCCESS,
  payload: data
});

const signInFailure = err => ({
  type: Types.SIGN_IN_FAILURE,
  err
});

export const signIn = data => async dispatch => {
  try {
    const res = await axios.post('http://192.168.100.40:5050/api/user/login', data);
    dispatch(signInSuccess(res.data));
  } catch (err) {
    dispatch(signInFailure(err));
  }
};

const signUpSuccess = data => ({
  type: Types.SIGN_UP_SUCCESS,
  payload: data
});

const signUpFailure = err => ({
  type: Types.SIGN_UP_FAILURE,
  err
});

export const signUp = data => async dispatch => {
  try {
    const res = await axios.post('http://192.168.100.40:5050/api/user/register', data);
    dispatch(signUpSuccess(res.data));
  } catch (err) {
    dispatch(signUpFailure(err));
  }
};

export const signOut = () => ({
  type: Types.SIGN_OUT
});