import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
  } from '../action/Constants';
  
  const INIT_STATE = {
    loading: false
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false };
    case LOGIN_USER_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
    }
  };