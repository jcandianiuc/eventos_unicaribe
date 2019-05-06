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
    case lists.setLabs.type:
      return { ...state, labs: [...payload] };
    case lists.setMaterias.type:
      return { ...state, materias: [...payload] };
    case lists.setCategorias.type:
      return { ...state, categorias: [...payload] };
    case lists.setNotificaciones.type:
      return { ...state, notificaciones: [...payload] };
    case lists.setReservas.type:
      return { ...state, reservas: [...payload] };
    case lists.setSolicitudes.type:
      return { ...state, solicitudes: [...payload] };
    case lists.setHorarios.type:
      return { ...state, horarios: [...payload] };
    default:
      return state;
  }
}
