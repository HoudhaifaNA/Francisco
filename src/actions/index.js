import actionNames from "../actionNames";

export const toggleDropdown = (action) => {
  return { type: actionNames.TOGGLE_DROPDOWN, payload: action };
};

export const selectItem = (item) => {
  return { type: actionNames.SELECT_ITEM, payload: item };
};

export const unSelectItem = (id) => {
  return { type: actionNames.UNSELECT_ITEM, payload: id };
};

export const updateCurrentItem = () => (dispatch, getState) => {
  const { selectedItems } = getState();
  dispatch({
    type: actionNames.UPDATE_CURRENT_ITEM,
    payload: selectedItems,
  });
};

export const updateSize = (size) => {
  return { type: actionNames.UPDATE_SIZE, payload: size };
};

export const increment = () => {
  return { type: actionNames.INCREMENET };
};

export const decrement = () => {
  return { type: actionNames.DECREMENT };
};

export const selectSuplument = (suplument) => {
  return { type: actionNames.SELECT_SUPLUMENT, payload: suplument };
};

export const unSelectSuplument = (name) => {
  return { type: actionNames.UNSELECT_SUPLUMENT, payload: name };
};

export const moveItem = (item) => {
  return { type: actionNames.MOVE_ITEM, payload: item };
};
export const clearCurrentItem = () => {
  return { type: actionNames.CLEAR_CURRENT_ITEM };
};

export const incrementOrderItem = (id) => {
  return { type: actionNames.INCREMENET_ORDER_ITEM, payload: id };
};

export const decrementOrderItem = (id) => {
  return { type: actionNames.DECREMENT_ORDER_ITEM, payload: id };
};

export const deleteOrderItem = (id) => {
  return { type: actionNames.DELETE_ORDER_ITEM, payload: id };
};
