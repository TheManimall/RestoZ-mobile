import * as Types from '../types';

const initialState = {
  dish: [],
  restDish: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_DISH_REQUEST:
      return {
        ...state,
        loaded: false
      };
    case Types.GET_ALL_DISH_SUCCESS:
      return {
        ...state,
        dish: action.payload,
        loaded: true
      };
    case Types.GET_ALL_DISH_FAILURE:
      return {
        ...state,
        loaded: true
      };
    case Types.GET_DISH_REQUEST:
      return {
        ...state,
        loaded: false
      };
    case Types.GET_DISH_SUCCESS:
      return {
        ...state,
        restDish: action.payload,
        loaded: true
      };
    case Types.GET_DISH_FAILURE:
      return {
        ...state,
        loaded: true
      };

    default:
      return state;
  }
};
