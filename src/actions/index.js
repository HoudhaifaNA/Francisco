import uniqid from "uniqid";
import actionNames from "../actionNames";
import history from "../History";
import axiosAPI from "../axiosAPI";

export const showError = (error) => {
  return { type: actionNames.CREATE_ERROR, payload: error };
};

export const getData = () => async (dispatch) => {
  const { data: items } = await axiosAPI.get("/Articles");
  const { data: categories } = await axiosAPI.get("/Categories");
  const { data: suppluments } = await axiosAPI.get("/Supplements");

  dispatch({
    type: actionNames.GET_DATA,
    payload: { items, categories, suppluments },
  });
};
export const getItemsOnCategory = (category) => async (dispatch) => {
  const { data: items } =
    category === "Tout"
      ? await axiosAPI.get(`/Articles`)
      : await axiosAPI.get(`/Articles?Category=${category.toLowerCase()}`);

  dispatch({
    type: actionNames.GET_BASED_ON_CATEGORY,
    payload: { items, category },
  });
};
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

export const editOrderItemPrice = (id, value) => {
  return { type: actionNames.EDIT_ORDER_ITEM_PRICE, payload: { id, value } };
};

export const deleteOrderItem = (id) => {
  return { type: actionNames.DELETE_ORDER_ITEM, payload: id };
};

export const toggleRetard = (type) => {
  return { type: actionNames.TOGGLE_RETARD, payload: type };
};

export const insertRetardTime = (time) => {
  return { type: actionNames.INSERT_RETARD_TIME, payload: time };
};

export const selectOrderType = (type) => {
  return { type: actionNames.SELECT_ORDER_TYPE, payload: type };
};

export const selectTypeInfo = (field, value) => {
  return { type: actionNames.SELECT_TYPE_INFO, payload: { field, value } };
};
export const calculateTotal = () => (dispatch, getState) => {
  const { order } = getState();

  dispatch({ type: actionNames.CALCULATE_TOTAL, payload: order.items });
};

export const checkoutOrder = () => async (dispatch, getState) => {
  const { order } = getState();

  const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
  const { data: orders } = await axiosAPI.get("/orders");
  await axiosAPI.post(`/orders`, {
    ...order,
    time,
    id: uniqid(),
    number: orders.length + 1,
  });
  dispatch({ type: actionNames.CHECKOUT_ORDER });
};

export const getAllOrders = () => async (dispatch) => {
  const { data: orders } = await axiosAPI.get("/orders");

  dispatch({ type: actionNames.GET_ALL_ORDERS, payload: orders });
};

export const selectOrdertoDelete = (id) => {
  return { type: actionNames.SELECT_ORDER_TO_DELETE, payload: id };
};

export const deleteOrder = (id) => async (dispatch) => {
  await axiosAPI.delete(`/orders/${id}`);

  dispatch({ type: actionNames.DELETE_ORDERS });
  window.location.reload();
};

export const selectMenuSection = (section) => async (dispatch) => {
  const { data: items } = await axiosAPI.get(`/${section}`);
  const { data: categories } = await axiosAPI.get("Categories");
  dispatch({
    type: actionNames.SELECT_MENU_SECTION,
    payload: { section, items, categories },
  });
};
export const inputChange = (field, value) => {
  return { type: actionNames.INPUT_CHANGE, payload: { field, value } };
};

export const createItem = () => async (dispatch, getState) => {
  const { menu } = getState();

  await axiosAPI.post(`/${menu.type}`, {
    ...menu.postItem,
    Category: menu.postItem.Category
      ? menu.postItem.Category.toLowerCase()
      : "",
    prices: [
      menu.postItem["Price L"] * 1,
      menu.postItem["Price XL"] * 1,
      menu.postItem["Price XXL"] * 1,
    ],
    id: uniqid(),
  });
  history.push("/menu");
  dispatch({ type: actionNames.CREATE_ITEM });
};
export const setEditItem = (id) => {
  return { type: actionNames.SET_EDIT_ITEM, payload: id };
};
export const editItem = (id) => async (dispatch, getState) => {
  const { menu } = getState();

  await axiosAPI.patch(`/${menu.type}/${id}`, {
    ...menu.editItem,
  });
  history.push("/menu");
};

export const selectToDelete = (id) => {
  return { type: actionNames.SELECT_TO_DELETE, payload: id };
};

export const deletMenuItem = (id) => async (dispatch, getState) => {
  const { menu } = getState();

  await axiosAPI.delete(`/${menu.type}/${id}`);
  window.location.reload();
};
