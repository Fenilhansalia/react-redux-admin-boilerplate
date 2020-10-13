import { combineReducers } from 'redux';

import Login from './loginReducer';
import Snackbar from './snackbarReducer';

const appReducer = combineReducers({
  Login,
  Snackbar,
});

const reducers = (state, action) => {
  return appReducer(state, action);
};

export default reducers;
