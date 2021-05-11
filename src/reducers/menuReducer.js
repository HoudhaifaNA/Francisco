import _ from "lodash";
import actionName from "../actionNames";

const INITIAL_STATE = {
  type: "Categories",
  items: {},
  categories: {},
  postItem: {},
  editItem: {},
  toDeleteItems: {},
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
      const id = action.payload;
      let toDeleteItems;
      if (state.toDeleteItems[id] === undefined && action.payload !== "all") {
        toDeleteItems = { ...state.toDeleteItems, [id]: id };
      } else if (action.payload === "all") {
        if (_.values(state.toDeleteItems).length === 0) {
          toDeleteItems = _.values(state.items).map((it) => {
            return it.id;
          });
          // toDeleteItems = _.keyBy(toDeleteItems, "id");
        } else {
          toDeleteItems = {};
        }
      } else {
        toDeleteItems = _.omit(state.toDeleteItems, id);
      }
      return { ...state, toDeleteItems };
    default:
      return state;
  }
};
