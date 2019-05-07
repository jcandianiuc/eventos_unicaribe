import { takeLatest, put } from "redux-saga/effects";
import { filtrosActions, listsActions } from "../actions";

export function* changeTalkersSaga({ payload: e }) {
  const {
    target: { value }
  } = e;
  yield put(filtrosActions.changeTalkers(value));
  yield put(listsActions.getTalkers(value));
}

export function* changeUsersSaga({ payload: e }) {
  const {
    target: { value }
  } = e;
  yield put(filtrosActions.changeUsers(value));
  yield put(listsActions.getUsers(value));
}

export default function* filtrosSaga() {
  yield takeLatest(filtrosActions.changeTalkers, changeTalkersSaga);
  yield takeLatest(filtrosActions.changeUsers, changeUsersSaga);
}
