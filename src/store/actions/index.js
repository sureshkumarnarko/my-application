import { LOADING_PRODUCTS } from "./types";

export const getProducts = () => ({
  type: LOADING_PRODUCTS,
  payload: true,
});
