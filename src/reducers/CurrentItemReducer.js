import _ from "lodash";
import actionName from "../actionNames";

const INITIAL_STATE = {
  name: "",
  size: "L",
  price: 0,
  supluments: {},
  suplumentsTotal: 0,
  basePrice: 0,
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

const calcFinalPrices = (pricesList) => {
  let list = _.values(pricesList).map((it) => [...it.prices]);
  let prices =
    list.length > 0
      ? list.reduce((a, b) => a.map((c, i) => c + b[i]))
      : [0, 0, 0];
  return prices;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionName.UPDATE_CURRENT_ITEM:
      let names = _.values(action.payload).map((it) => it.name);
      let name = names.join(" / ");
      let prices = calcFinalPrices(action.payload);
      let suplumentsTotal = finalPrice(
        state.size,
        calcFinalPrices(state.supluments)
      );
      const price =
        (finalPrice(state.size, prices) + suplumentsTotal) * state.quantity;
      return {
        ...state,
        prices,
        name,
        price,
        basePrice: price / state.quantity,
      };
    case actionName.UPDATE_SIZE:
      return { ...state, size: action.payload };
    case actionName.INCREMENET:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case actionName.DECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
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
    case actionName.CLEAR_CURRENT_ITEM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
