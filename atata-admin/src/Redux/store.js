import {combineReducers, createStore} from "redux";
import productIDReducer from "./ProductID";
import ShowModalReducer from "./Modal"

const rootReducer =  combineReducers({
  productIDReducer,
  ShowModalReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store