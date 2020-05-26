import constants from "../constants/Constants";
import Pizza from "../Pizza";

const pizzaReducer = (state = [new Pizza(1)], action) => {
  switch (action.type) {
    case constants.ADD_ROW:
      let updatedPizzas = state.slice();
      updatedPizzas.push(new Pizza(updatedPizzas.length + 1));
      return updatedPizzas;
    default:
      return state;
  }
};

export default pizzaReducer;
