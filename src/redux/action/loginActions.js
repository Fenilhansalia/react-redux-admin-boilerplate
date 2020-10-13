import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from './Constants';

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const loginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

export const loginUserFailure = () => ({
  type: LOGIN_USER_FAILURE,
});
