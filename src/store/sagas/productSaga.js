import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS, LOADING_PRODUCTS } from "../actions/types";

function* fetchProducts() {
  const json = yield fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );
  yield put({ type: GET_PRODUCTS, payload: json });
}

export function* actionWatcher() {
  yield takeLatest(LOADING_PRODUCTS, fetchProducts);
}
