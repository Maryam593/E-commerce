import { combineReducers } from "redux";
import ProductReducer from "./reducer";
import cartReducer from "./cartReducer";

const RootReducer = combineReducers(
   {
    Product : ProductReducer,
    Cart : cartReducer,
   }
)
export default RootReducer;