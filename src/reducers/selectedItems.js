import _ from "lodash";
import actionName from "../actionNames";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case actionName.SELECT_ITEM:
      return { ...state, [action.payload.id]: action.payload };
    case actionName.UNSELECT_ITEM:
      return _.omit(state, [action.payload]);
    default:
      return state;
  }
};
