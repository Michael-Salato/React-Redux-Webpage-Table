import { combineReducers } from "redux";
import pizzaReducer from "./pizzaReducer";

const allReducers = combineReducers({
  pizzas: pizzaReducer,
});

export default allReducers;
