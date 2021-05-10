import actionName from "../actionNames";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
  switch (action.type) {
    case actionName.CREATE_ERROR:
      return action.payload;
    default:
      return state;
  }
};
