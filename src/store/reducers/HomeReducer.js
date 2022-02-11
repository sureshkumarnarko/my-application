import { DISCOUNT_PRODUCTS } from "../actions/types";

const initial_state = {
  discountProducts: [],
};

const HomeReducer = (state = initial_state, action) => {
  switch (action.type) {
    case DISCOUNT_PRODUCTS:
      return { ...state, discountProducts: action.payload };
    default:
      return state;
  }
};
export default HomeReducer;
