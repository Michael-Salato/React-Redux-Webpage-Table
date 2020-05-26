import constants from "../constants/Constants";

const pizzaReducer = (state = [{ id: 1 }], action) => {
  switch (action.type) {
    case constants.ADD_ROW:
      let updatedPizzas = state.slice();
      updatedPizzas.push({ id: updatedPizzas.length + 1 });
      return updatedPizzas;
    default:
      return state;
  }
};

export default pizzaReducer;
