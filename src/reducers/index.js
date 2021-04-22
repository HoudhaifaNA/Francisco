import { combineReducers } from "redux";
import DropdownReducer from "./DropdownReducer";
import selectedItems from "./selectedItems";
import CurrentItemReducer from "./CurrentItemReducer";

export default combineReducers({
  dropdown: DropdownReducer,
  selectedItems: selectedItems,
  currentItem: CurrentItemReducer,
});
