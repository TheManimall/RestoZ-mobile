import axios from 'axios';
import * as Types from '../types';

export const getAllDishRequest = () => ({
  type: Types.GET_ALL_DISH_REQUEST
});

const getAllDishSuccess = data => ({
  type: Types.GET_ALL_DISH_SUCCESS,
  payload: data
});

const getAllDishFailure = err => ({
  type: Types.GET_ALL_DISH_FAILURE,
  err
});

export const getAllDish = () => async dispatch => {
  dispatch(getAllDishRequest());
  try {
    const res = await axios.get('http://192.168.100.40:5050/api/dish/all');
    dispatch(getAllDishSuccess(res.data));
  } catch (err) {
    dispatch(getAllDishFailure(err));
  }
};

const getDishRequest = () => ({
  type: Types.GET_DISH_REQUEST
});

const getDishSuccess = data => ({
  type: Types.GET_DISH_SUCCESS,
  payload: data
});

const getDishFailure = err => ({
  type: Types.GET_DISH_FAILURE,
  err
});

export const getDish = value => async dispatch => {
  dispatch(getDishRequest());
  try {
    const res = await axios.get(`http://192.168.100.40:5050/api/dish/get/${value}`);
    dispatch(getDishSuccess(res.data));
  } catch (err) {
    console.error(err.response);
    dispatch(getDishFailure(err));
  }
};


