import { combineReducers } from "redux";
import pizzaReducer from "./pizzaReducer";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
  pizzas: pizzaReducer,
  form: formReducer,
});

export default allReducers;
