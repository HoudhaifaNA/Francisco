import uniqid from "uniqid";
import bcrypt from "bcryptjs";
import actionNames from "../actionNames";
import history from "../History";
import axiosAPI from "../axiosAPI";

const sortAlphabatecily = (array, type) => {
  return array.sort((a, b) => a.name.localeCompare(b.name));
};

export const loginInputChange = (field, value) => {
  return { type: actionNames.ON_LOGIN_INPUT_CHANGE, payload: { field, value } };
};

export const login = (name, password) => async (dispatch) => {
  const { data: user } = await axiosAPI.get(`/users/?name=${name}`);
  if (user.length > 0) {
    const isPasswordCorrect = bcrypt.compareSync(password, user[0].password);
    if (isPasswordCorrect) {
      localStorage.setItem("id", user[0].id);
      history.push("/home");
      window.dispatchEvent(new Event("popstate"));
      return ["success"];
    } else {
      return ["error", "password incorrect"];
    }
  } else {
    return ["error", `user doesn't exist`];
  }
};

export const showError = (error) => {
  return { type: actionNames.CREATE_ERROR, payload: error };
};

export const onSearch = (value) => {
  return { type: actionNames.SEAERCH, payload: value };
};

export const getData = () => async (dispatch) => {
  let { data: items } = await axiosAPI.get("/Articles");
  let { data: categories } = await axiosAPI.get("/Categories");
  let { data: suppluments } = await axiosAPI.get("/Supplements");
  items = sortAlphabatecily(items);
  categories = sortAlphabatecily(categories);
  suppluments = sortAlphabatecily(suppluments);
  dispatch({
    type: actionNames.GET_DATA,
    payload: { items, categories, suppluments },
  });
};
export const getItemsOnCategory = (category) => async (dispatch) => {
  let { data: items } =
    category === "Tout"
      ? await axiosAPI.get(`/Articles`)
      : await axiosAPI.get(`/Articles?Category=${category.toLowerCase()}`);
  items = sortAlphabatecily(items);

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
  const days = ["Sun", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const months = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Jui",
    "Aoû",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date();
  const { order } = getState();
  const todayDate = date.toISOString().split("T")[0];
  const { data: user } = await axiosAPI.get(
    `/users/${localStorage.getItem("id")}`
  );
  const { data: orders } = await axiosAPI.get("/orders");
  const { data: ordersNotToday } = await axiosAPI.get(
    `/orders/?todayDate_ne=${todayDate}`
  );
  ordersNotToday.forEach(async (or) => {
    await axiosAPI.delete(`/orders/${or.id}`);
  });
  const timeChecker = (unit) => {
    if (`${unit}`.split("").length === 1) {
      return `0${unit}`;
    } else {
      return unit;
    }
  };

  const time = `${timeChecker(date.getHours())}:${timeChecker(
    date.getMinutes()
  )}`;
  const orderDate = `${days[date.getDay()]},${
    months[date.getMonth()]
  }-${date.getDate()}-${date.getFullYear()}`;
  const formatedOrder = {
    ...order,
    time,
    id: uniqid(),
    number: orders.length + 1,
    orderDate,
    user: user.name,
    todayDate,
  };
  localStorage.setItem("order", JSON.stringify(formatedOrder));
  await axiosAPI.post(`/orders`, formatedOrder);

  dispatch({ type: actionNames.CHECKOUT_ORDER });
};

export const getAllOrders = () => async (dispatch) => {
  const { data: orders } = await axiosAPI.get(
    `/orders/?todayDate=${new Date().toISOString().split("T")[0]}`
  );

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
  let { data: items } = await axiosAPI.get(`/${section}`);
  const { data: categories } = await axiosAPI.get("Categories");
  items = sortAlphabatecily(items);

  dispatch({
    type: actionNames.SELECT_MENU_SECTION,
    payload: { section, items, categories },
  });
};
export const inputChange = (field, value) => {
  return { type: actionNames.INPUT_CHANGE, payload: { field, value } };
};

export const createItem = (printer) => async (dispatch, getState) => {
  const { menu } = getState();
  let relaterdPrinter;
  if (menu.type !== "Categories") {
    const { data: category } = await axiosAPI.get(
      `/Categories/?name=${menu.postItem.Category.toLowerCase()}`
    );
    relaterdPrinter = category[0].printer;
  } else {
    relaterdPrinter = printer;
  }

  await axiosAPI.post(`/${menu.type}`, {
    ...menu.postItem,
    Category: menu.postItem.Category
      ? menu.postItem.Category.toLowerCase()
      : "",
    name: menu.postItem.name.toLowerCase(),
    prices: [
      menu.postItem["Price L"] * 1,
      menu.postItem["Price XL"] * 1,
      menu.postItem["Price XXL"] * 1,
    ],
    printer: relaterdPrinter,
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
    name: menu.editItem.name.toLowerCase(),
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

export const getUsers = () => async (dispatch) => {
  let { data: users } = await axiosAPI.get(`/users`);
  users = users.map((user) => user.name);
  dispatch({ type: actionNames.GET_USERS, payload: users });
};

export const onSecureityInputChange = (field, text, type) => {
  return {
    type: actionNames.ON_SECURETY_INPUT_CHANGE,
    payload: { field, text, type },
  };
};

export const updateUser = (type, security) => async (dispatch) => {
  const data = security[type];

  if (type === "newAccount") {
    const newUser = {
      name: data["first"].toLowerCase(),
      password: await bcrypt.hash(data["second"], 12),
    };
    await axiosAPI.post(`/users`, { ...newUser, id: uniqid() });
  } else {
    const newPassword = await bcrypt.hash(data["first"], 12);
    const id = localStorage.getItem("id");
    await axiosAPI.patch(`/users/${id}`, { password: newPassword });
  }
  dispatch({ type: actionNames.SUBMIT_USER });
};
