import _ from "lodash";
import actionNames from "../actionNames";

const INITIAL_STATE = {
  items: {},
  total: 0,
  retard: false,
  retardTime: "",
  type: "A Table",
  tableNumber: 1,
  phoneNumber: "",
  address: "",
};

const setNewItems = (items, item, id) => {
  return { ...items, [id]: item };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionNames.MOVE_ITEM:
      const items = { ...state.items, [action.payload.id]: action.payload };
      return { ...state, items };
    case actionNames.DELETE_ORDER_ITEM:
      return { ...state, items: _.omit(state.items, action.payload) };
    case actionNames.INCREMENET_ORDER_ITEM:
      let increasedQuanity = state.items[action.payload].quantity + 1;
      let increasedItem = {
        ...state.items[action.payload],
        quantity: increasedQuanity,
        price: state.items[action.payload].basePrice * increasedQuanity,
      };

      return {
        ...state,
        items: setNewItems(state.items, increasedItem, action.payload),
      };
    case actionNames.DECREMENT_ORDER_ITEM:
      let decreasedQuanity = state.items[action.payload].quantity - 1;

      let decreasedItem = {
        ...state.items[action.payload],
        quantity: decreasedQuanity,
        price: state.items[action.payload].basePrice * decreasedQuanity,
      };
      return {
        ...state,
        items: setNewItems(state.items, decreasedItem, action.payload),
      };
    case actionNames.EDIT_ORDER_ITEM_PRICE:
      let editedPrice = {
        ...state.items[action.payload.id],
        basePrice: action.payload.value,
        price: action.payload.value * state.items[action.payload.id].quantity,
      };
      return {
        ...state,
        items: setNewItems(state.items, editedPrice, action.payload.id),
      };
    case actionNames.TOGGLE_RETARD:
      return { ...state, retard: action.payload };
    case actionNames.INSERT_RETARD_TIME:
      return { ...state, retardTime: action.payload };
    case actionNames.SELECT_ORDER_TYPE:
      return {
        ...state,
        type: action.payload,
        phoneNumber: "",
        address: null,
        tableNumber: 1,
      };
    case actionNames.SELECT_TYPE_INFO:
      return { ...state, [action.payload.field]: action.payload.value };
    case actionNames.CALCULATE_TOTAL:
      const total = _.values(action.payload)
        .map((it) => it.price)
        .reduce((a, b) => a + b, 0);
      return { ...state, total: total };
    case actionNames.CHECKOUT_ORDER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
