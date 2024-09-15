import { applyMiddleware, createStore } from "redux";
import RootReducer from "../Reducer/RootReducer";
import { thunk } from "redux-thunk";

const ReduxStore = createStore(RootReducer,applyMiddleware(thunk))

export default ReduxStore