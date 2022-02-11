import { all } from "redux-saga/effects";
import { actionWatcher } from "./productSaga";

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
