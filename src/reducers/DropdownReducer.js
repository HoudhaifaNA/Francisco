import actionName from "../actionNames";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = "close", action) => {
  switch (action.type) {
    case actionName.TOGGLE_DROPDOWN:
      return action.payload;
    default:
      return state;
  }
};
