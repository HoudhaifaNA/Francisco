import actionName from "../actionNames";

const INITIAL_STATE = {
  type: "Tout",
  items: {},
  categories: {},
  suppluments: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionName.GET_DATA:
      const { items, categories, suppluments } = action.payload;
      return { ...state, items, categories, suppluments };
    case actionName.GET_BASED_ON_CATEGORY:
      return {
        ...state,
        type: action.payload.category,
        items: action.payload.items,
      };
    default:
      return state;
  }
};
