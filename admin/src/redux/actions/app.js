import { createActions } from "ractionx";

const prefix = "unicaribe/eventos/app";

const types = [
  "LOG_IN",
  "CREATE_ACCOUNT",
  "TOGGLE_LOG_IN_FORM",
  "SET_STATUS",
  "GO_TO",
  "LOG_OUT",
  "SET_TOKEN",
  "AUTO_LOGIN"
];

export const {
  logIn,
  createAccount,
  toggleLogInForm,
  setStatus,
  goTo,
  logOut,
  setToken,
  autoLogin
} = createActions(prefix, types);

export default {
  logIn,
  createAccount,
  toggleLogInForm,
  setStatus,
  goTo,
  logOut,
  setToken,
  autoLogin
};
