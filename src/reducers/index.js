import { combineReducers } from "redux";
import DropdownReducer from "./DropdownReducer";
import selectedItems from "./selectedItems";
import CurrentItemReducer from "./CurrentItemReducer";
import orderReducer from "./orderReducer";
import menuReducer from "./menuReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  dropdown: DropdownReducer,
  selectedItems: selectedItems,
  currentItem: CurrentItemReducer,
  order: orderReducer,
  menu: menuReducer,
  error: errorReducer,
});
