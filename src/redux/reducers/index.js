import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import currentItemReducer from "./currentItemReducer"


export default combineReducers({ itemsReducer, currentItemReducer });
