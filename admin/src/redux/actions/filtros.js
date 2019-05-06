import { createActions } from "ractionx";

const prefix = "ucaribe/eventos/lists";

const types = ["CHANGE_USERS", "SET_USERS", "CHANGE_TALKERS", "SET_TALKERS"];

export const {
  changeUsers,
  setUsers,
  changeTalkers,
  setTalkers
} = createActions(prefix, types);

export default {
  changeUsers,
  setUsers,
  changeTalkers,
  setTalkers
};
