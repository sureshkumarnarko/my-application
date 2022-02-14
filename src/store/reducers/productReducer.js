import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  LOADING_PRODUCT,
  LOADING_PRODUCTS,
} from "../actions/types";

const initial_state = {
  products: [],
  productById: {},
  loading_products: false,
  loading_product: false,
};

const productReducer = (state = initial_state, action) => {
  switch (action.type) {
    case LOADING_PRODUCTS:
      return { ...state, loading_products: action.payload };
    case GET_PRODUCTS:
      return { ...state, products: action.payload, loading_products: false };
    case LOADING_PRODUCT:
      return { ...state, loading_product: action.payload };
    case GET_PRODUCT_BY_ID:
      return { ...state, productById: action.payload, loading_product: false };
    default:
      return state;
  }
};
export default productReducer;
