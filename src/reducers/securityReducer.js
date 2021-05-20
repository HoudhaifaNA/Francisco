import actionNames from "../actionNames";

const INITIAL_STATE = {
  loginForm: {
    name: "",
    password: "",
  },
  newPassword: {
    first: "",
    second: "",
  },
  newAccount: {
    first: "",
    second: "",
  },

  users: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionNames.ON_LOGIN_INPUT_CHANGE:
      let updateLoginForm = {
        ...state.loginForm,
        [action.payload.field]: action.payload.value,
      };
      return { ...state, loginForm: updateLoginForm };
    case actionNames.GET_USERS:
      return { ...state, users: action.payload };
    case actionNames.ON_SECURETY_INPUT_CHANGE:
      let data = {
        ...state[action.payload.type],
        [action.payload.field]: action.payload.text,
      };
      return { ...state, [action.payload.type]: data };
    case actionNames.SUBMIT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
