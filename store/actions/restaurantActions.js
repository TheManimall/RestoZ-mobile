import axios from 'axios';
import * as Types from '../types';

export const getAllRestaurantRequest = () => ({
  type: Types.GET_ALL_RESTAURANT_REQUEST
});

const getAllRestaurantSuccess = data => ({
  type: Types.GET_ALL_RESTAURANT_SUCCESS,
  payload: data
});

const getAllRestaurantFailure = err => ({
  type: Types.GET_ALL_RESTAURANT_FAILURE,
  err
});

export const getAllRestaurant = () => async dispatch => {
  dispatch(getAllRestaurantRequest());
  try {
    const res = await axios.get('http://192.168.100.40:5050/api/restaurant/all');
    dispatch(getAllRestaurantSuccess(res.data));
  } catch (err) {
    dispatch(getAllRestaurantFailure(err));
  }
};

export const test = () => dispatch(getAllRestaurantRequest());
