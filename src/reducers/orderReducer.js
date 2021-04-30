import _ from "lodash";
import actionNames from "../actionNames";

const INITIAL_STATE = {
  items: {},
  total: 0,
  status: "A Table",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionNames.MOVE_ITEM:
      const items = { ...state.items, [action.payload.id]: action.payload };
      return { ...state, items };
    case actionNames.DELETE_ORDER_ITEM:
      return { ...state, items: _.omit(state.items, action.payload) };
    default:
      return state;
  }
};
