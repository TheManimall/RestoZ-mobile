import * as Types from '../types';

const initialState = {
  loaded: false,
  order: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return {
        ...state,
        order: [...state.order, action.payload],
      };

    default:
      return state;
  }
};
