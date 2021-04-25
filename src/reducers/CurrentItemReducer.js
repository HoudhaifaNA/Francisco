import _ from "lodash";
import actionName from "../actionNames";

const INITIAL_STATE = {
  name: "",
  size: "L",
  price: 0,
  supluments: {},
  quantity: 1,
  prices: [0, 0, 0],
};

const finalPrice = (size, prices) => {
  let price;
  if (size === "L") price = prices[0];
  if (size === "XL") price = prices[1];
  if (size === "XXL") price = prices[2];
  return price;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionName.UPDATE_CURRENT_ITEM:
      let names = _.values(action.payload).map((it) => it.name);
      let name = names.join(" / ");
      let pricesList = _.values(action.payload).map((it) => [...it.prices]);
      let prices =
        pricesList.length > 0
          ? pricesList.reduce((a, b) => a.map((c, i) => c + b[i]))
          : [0, 0, 0];
      const price = finalPrice(state.size, prices);
      return { ...state, prices, name, price };
    case actionName.UPDATE_SIZE:
      const editedPrice = finalPrice(action.payload, state.prices);
      return { ...state, size: action.payload, price: editedPrice };
    case actionName.INCREMENET:
      return { ...state, quantity: state.quantity + 1 };
    case actionName.DECREMENT:
      return { ...state, quantity: state.quantity - 1 };
    case actionName.SELECT_SUPLUMENT:
      return {
        ...state,
        supluments: {
          ...state.supluments,
          [action.payload.name]: action.payload,
        },
      };
    case actionName.UNSELECT_SUPLUMENT:
      return {
        ...state,
        supluments: _.omit(state.supluments, [action.payload.name]),
      };

    default:
      return state;
  }
};
