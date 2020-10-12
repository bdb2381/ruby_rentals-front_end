import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import currentItemReducer from "./currentItemReducer"
import cartReducer from "./cartReducer"

export default combineReducers({ 
  itemsReducer,
  currentItemReducer,
  cartReducer
 });
