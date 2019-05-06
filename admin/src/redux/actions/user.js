import { createActions } from "ractionx";

const prefix = "ucaribe/eventos/user";

const types = ["SET_USER"];

export const { setUser } = createActions(prefix, types);

export default {
  setUser
};
