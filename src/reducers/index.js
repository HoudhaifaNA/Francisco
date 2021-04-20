import { combineReducers } from "redux";
import DropdownReducer from "./DropdownReducer";

export default combineReducers({
  dropdown: DropdownReducer,
});
