import {
  SNACKBAR_CLOSE,
  SNACKBAR_WARNING,
  SNACKBAR_SUCCESS,
  SNACKBAR_INFO,
  SNACKBAR_ERROR,
} from '../action/Constants';

const INIT_STATE = {
  open: false,
  severity: 'info',
  message: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SNACKBAR_CLOSE:
      return { ...state, open: false };
    case SNACKBAR_SUCCESS:
      return {
        ...state,
        open: true,
        severity: 'success',
        message: action.payload.message,
      };

    case SNACKBAR_WARNING:
      return {
        ...state,
        open: true,
        severity: 'warning',
        message: action.payload.message,
      };
    case SNACKBAR_INFO:
      return {
        ...state,
        open: true,
        severity: 'info',
        message: action.payload.message,
      };
    case SNACKBAR_ERROR:
      return {
        ...state,
        open: true,
        severity: 'error',
        message: action.payload.message,
      };
    default:
      return state;
  }
};
