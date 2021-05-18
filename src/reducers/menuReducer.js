import _ from "lodash";
import actionName from "../actionNames";

const INITIAL_STATE = {
  type: "Categories",
  items: {},
  categories: {},
  postItem: {},
  editItem: {},
  selected: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionName.SELECT_MENU_SECTION:
      return {
        ...state,
        type: action.payload.section,
        items: _.keyBy(action.payload.items, "id"),
        categories: _.keyBy(action.payload.categories, "id"),
      };
    case actionName.INPUT_CHANGE:
      const postItem = {
        ...state.postItem,
        [action.payload.field]: action.payload.value,
      };
      if (window.location.pathname.startsWith("/edit/")) {
        return {
          ...state,
          editItem: {
            ...state.editItem,
            [action.payload.field]: action.payload.value,
          },
        };
      } else {
        return { ...state, postItem };
      }
    case actionName.CREATE_ITEM:
      return { ...state, postItem: {} };
    case actionName.SET_EDIT_ITEM:
      return { ...state, editItem: state.items[action.payload] };
    case actionName.SELECT_TO_DELETE:
      if (
        state.selected.indexOf(action.payload) === -1 &&
        action.payload !== "all"
      ) {
        return { ...state, selected: [...state.selected, action.payload] };
      } else if (action.payload === "all") {
        if (state.selected.length === 0) {
          const ids = _.values(state.items).map((it) => it.id);
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
