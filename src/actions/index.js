import actionNames from "../actionNames";

export const toggleDropdown = (action) => {
  return { type: actionNames.EXTEND_DROPDOWN, payload: action };
};

export const selectItem = (item) => {
  return { type: actionNames.SELECT_ITEM, payload: item };
};

export const unSelectItem = (id) => {
  return { type: actionNames.UNSELECT_ITEM, payload: id };
};
