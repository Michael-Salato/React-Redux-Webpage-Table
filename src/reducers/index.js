import { combineReducers } from "redux";
import pizzaReducer from "./pizzaReducer";

const allReducers = combineReducers({
  pizzaReducer,
});

export default allReducers;
