import { combineReducers } from "redux";
import DropdownReducer from "./DropdownReducer";
import selectedItems from "./selectedItems";
import CurrentItemReducer from "./CurrentItemReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  dropdown: DropdownReducer,
  selectedItems: selectedItems,
  currentItem: CurrentItemReducer,
  order: orderReducer,
});
