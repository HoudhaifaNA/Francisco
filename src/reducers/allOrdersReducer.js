import _ from "lodash";
import actionNames from "../actionNames";

const INITIAL_STATE = {
  orders: {},
  selected: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionNames.GET_ALL_ORDERS:
      const orders =
        action.payload.length > 0 ? _.keyBy(action.payload, "id") : "deleted";
      return { ...state, orders };
    case actionNames.SELECT_ORDER_TO_DELETE:
      if (
        state.selected.indexOf(action.payload) === -1 &&
        action.payload !== "all"
      ) {
        return { ...state, selected: [...state.selected, action.payload] };
      } else if (action.payload === "all") {
        if (state.selected.length === 0) {
          const ids = _.values(state.orders).map((or) => or.id);
          return { ...state, selected: ids };
        } else {
          return { ...state, selected: [] };
        }
      } else {
        return {
          ...state,
          selected: _.remove(state.selected, (id) => id !== action.payload),
        };
      }

    default:
      return state;
  }
};
