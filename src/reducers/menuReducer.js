import actionName from "../actionNames";

const INITIAL_STATE = {
  type: "Categories",
  items: {},
  postItem: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionName.SELECT_MENU_SECTION:
      return { ...state, type: action.payload };
    case actionName.INPUT_CHANGE:
      const postItem = {
        ...state.postItem,
        [action.payload.field]: action.payload.value,
      };
      return { ...state, postItem };
    default:
      return state;
  }
};
