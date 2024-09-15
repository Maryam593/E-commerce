import { combineReducers } from "redux";
import ProductReducer from "./reducer";

const RootReducer = combineReducers(
   {
    Product : ProductReducer
   }
)
export default RootReducer;