import { createActions } from "ractionx";

const prefix = "ucaribe/eventos/lists";

const types = [
  "GET_USERS",
  "SET_USERS",
  "GET_TALKERS",
  "SET_TALKERS",
  "GET_PLACES",
  "SET_PLACES",
  "GET_EVENTS",
  "SET_EVENTS",
  "GET_NOTIFICACIONES",
  "SET_NOTIFICACIONES"
];

export const {
  getUsers,
  setUsers,
  getTalkers,
  setTalkers,
  getPlaces,
  setPlaces,
  getEvents,
  setEvents,
  getNotificaciones,
  setNotificaciones
} = createActions(prefix, types);

export default {
  getUsers,
  setUsers,
  getTalkers,
  setTalkers,
  getPlaces,
  setPlaces,
  getEvents,
  setEvents,
  getNotificaciones,
  setNotificaciones
};
