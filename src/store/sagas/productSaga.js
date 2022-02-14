import { put, takeLatest } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  LOADING_PRODUCT,
  LOADING_PRODUCTS,
} from "../actions/types";

function* fetchProducts() {
  const json = yield fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );
  yield put({ type: GET_PRODUCTS, payload: json });
}

function* fetchProductBYId({ id }) {
  const json = yield fetch(`https://fakestoreapi.com/products/${id}`).then(
    (response) => response.json()
  );
  yield put({ type: GET_PRODUCT_BY_ID, payload: json });
}

export function* actionWatcher() {
  yield takeLatest(LOADING_PRODUCTS, fetchProducts);
  yield takeLatest(LOADING_PRODUCT, fetchProductBYId);
}
