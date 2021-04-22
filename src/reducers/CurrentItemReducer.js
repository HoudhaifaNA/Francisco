import actionName from "../actionNames";

const INITIAL_STATE = {
  name: "",
  size: "L",
  price: null,
  supluments: [],
  prices: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionName.SELECT_ITEM:
      return action.payload;
    default:
      return state;
  }
};
