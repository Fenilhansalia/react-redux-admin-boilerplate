import {
  SNACKBAR_ERROR,
  SNACKBAR_INFO,
  SNACKBAR_SUCCESS,
  SNACKBAR_WARNING,
  SNACKBAR_CLOSE,
} from './Constants';

export const snackbarSuccess = (payload) => ({
  type: SNACKBAR_SUCCESS,
  payload,
});

export const snackbarWarning = (payload) => ({
  type: SNACKBAR_WARNING,
  payload,
});

export const snackbarInfo = (payload) => ({
  type: SNACKBAR_INFO,
  payload,
});

export const snackbarError = (payload) => ({
  type: SNACKBAR_ERROR,
  payload,
});

export const snackbarClose = () => ({
  type: SNACKBAR_CLOSE,
});
