import { combineReducers } from "redux";
import DropdownReducer from "./DropdownReducer";
import selectedItems from "./selectedItems";

export default combineReducers({
  dropdown: DropdownReducer,
  selectedItems: selectedItems,
});
