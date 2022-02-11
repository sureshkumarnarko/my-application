import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
  product: productReducer,
  home: HomeReducer,
});

export default reducers;
