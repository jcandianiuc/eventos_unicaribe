import { listsActions as lists } from "../actions";

const initialState = {
  users: [],
  places: [],
  events: [],
  notificaciones: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case lists.setUsers.type:
      return { ...state, users: [...payload] };
    case lists.setPlaces.type:
      return { ...state, places: [...payload] };
    case lists.setNotificaciones.type:
      return { ...state, notificaciones: [...payload] };
    case lists.setEvents.type:
      return { ...state, events: [...payload] };

    default:
      return state;
  }
}
