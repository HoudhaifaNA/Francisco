import actionNames from "../actionNames";

export const toggleDropdown = (action) => {
  return { type: actionNames.EXTEND_DROPDOWN, payload: action };
};
