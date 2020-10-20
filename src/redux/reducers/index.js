import { combineReducers } from "redux";

import itemsReducer from "./itemsReducer";
import currentItemReducer from "./currentItemReducer"
import cartReducer from "./cartReducer"
import loginReducer from "./loginReducer"


export default combineReducers({ 
  item: itemsReducer,
  currentItem: currentItemReducer,
  login: loginReducer,
  cart: cartReducer,
 });
