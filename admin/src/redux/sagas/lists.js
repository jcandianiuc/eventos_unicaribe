import { takeLatest, put, call } from "redux-saga/effects";
import { listsActions } from "../actions";
import api from "../../services/api";

export function* getAsesoresSaga({ payload }) {
  const params = {
    tipo: [1, 3],
    name: payload,
    apellidos: payload,
    email: payload
  };
  const { data: users } = yield call(api.users.get, params);
  yield put(listsActions.setAsesores(users));
}

export function* getAutoresSaga({ payload }) {
  const params = {
    tipo: [1, 2],
    name: payload,
    apellidos: payload,
    email: payload
  };
  const { data: users } = yield call(api.users.get, params);
  yield put(listsActions.setAutores(users));
}

export function* getUsersSaga({ payload }) {
  const params = {
    name: payload,
    apellidos: payload,
    email: payload
  };
  const { data: users } = yield call(api.users.get, params);
  yield put(listsActions.setUsers(users));
}

export default function* filtrosSaga() {
  yield takeLatest(listsActions.getTalkers, getTalkersSaga);
  yield takeLatest(listsActions.getUsers, getUsersSaga);
}
