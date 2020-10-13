import { all } from 'redux-saga/effects';

import Login from './loginSaga';


export default function* rootSaga() {
  yield all([
    Login(),
  ]);
}