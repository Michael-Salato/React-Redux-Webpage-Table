import constants from "../constants";

const addRowReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.ADD_ROW:
      return state; // TODO
    default:
      return state;
  }
};

export default counterReducer;
