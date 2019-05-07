import { createActions } from "ractionx";

const prefix = "ucaribe/eventos/lists";

const types = ["GET_USERS", "SET_USERS", "GET_TALKERS", "SET_TALKERS"];

export const { getUsers, setUsers, getTalkers, setTalkers } = createActions(
  prefix,
  types
);

export default {
  getUsers,
  setUsers,
  getTalkers,
  setTalkers
};
