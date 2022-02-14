import { LOADING_PRODUCT, LOADING_PRODUCTS } from "./types";

export const getProducts = () => ({
  type: LOADING_PRODUCTS,
  payload: true,
});

export const getProductById = (id) => ({
  type: LOADING_PRODUCT,
  payload: true,
  id: id,
});
