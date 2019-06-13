import * as Types from '../types';

const initialState = {
  restaurant: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_RESTAURANT_REQUEST:
      return {
        ...state,
        loaded: false
      };
    case Types.GET_ALL_RESTAURANT_SUCCESS:
      return {
        ...state,
        rest: action.payload,
        loaded: true
      };
    case Types.GET_ALL_RESTAURANT_FAILURE:
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
};
