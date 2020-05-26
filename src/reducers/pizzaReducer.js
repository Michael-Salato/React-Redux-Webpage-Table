import constants from "../constants/Constants";

const pizzaReducer = (state = [{ id: 1 }], action) => {
  switch (action.type) {
    case constants.ADD_ROW:
      return state.push({ id: state.length + 1 });
    default:
      return state;
  }
};

export default pizzaReducer;
