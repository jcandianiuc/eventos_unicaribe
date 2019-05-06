import { filtrosActions as filtros } from "../actions";

const initialState = {
  users: "",
  talkers: ""
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case filtros.setUsers.type:
      return { ...state, users: payload };
    case filtros.setAutores.type:
      return { ...state, talkers: payload };
    default:
      return state;
  }
}
