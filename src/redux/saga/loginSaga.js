import { all, takeEvery, put, call } from 'redux-saga/effects';

import { LOGIN_USER } from '../action/Constants';
import {
  loginUserSuccess,
  loginUserFailure,
  snackbarSuccess,
  snackbarError,
} from '../action';
import API from '../../utils/api';
import { setToken } from '../../utils/helper';

function* loginUserRequest(actions) {
  try {
    const res = yield API.post('login', {
      email: actions.payload.email,
      password: actions.payload.password,
    });
    console.log({ res });
    if (res.data.meta.code === 1) {
      yield put(loginUserSuccess());
      if (res.data && res.data.data && res.data.data.token) {
        console.log(' if');

        yield call(setToken, res.data.data.token);
        yield put(snackbarSuccess(res.data.meta));
        yield call(actions.payload.cb);
      }
    } else if (res.data.meta.status === 0) {
      console.log('else if');

      yield put(loginUserFailure());
      yield put(snackbarError(res.data.meta));
    } else {
      console.log('else');
      yield put(loginUserFailure());
      yield put(snackbarError(res.data.meta));
    }
  } catch (e) {
    yield put(loginUserFailure());
  }
}

export function* watchLoginUserAPI() {
  yield takeEvery(LOGIN_USER, loginUserRequest);
}

export default function* rootSaga() {
  yield all([watchLoginUserAPI()]);
}
