const LOGIN_PENDING = "opacity/authentication/login-pending";
const LOGIN_SUCCESS = "opacity/authentication/login-success";
const LOGIN_FAILURE = "opacity/authentication/login-failure";
const LOGOUT = "opacity/authentication/logout";
const FETCH_ACCOUNT_DATA_SUCCESS =
  "opacity/authentication/fetch-account-data-success";
const FETCH_ACCOUNT_DATA_FAILURE =
  "opacity/authentication/fetch-account-data-failure";
const RECOVER_ACCOUNT_HANDLE = "opacity/authentication/recover-account-handle";
const RECOVER_ACCOUNT_HANDLE_SUCCESS =
  "opacity/authentication/recover-account-handle-success";
const RECOVER_ACCOUNT_HANDLE_FAILURE =
  "opacity/authentication/recover-account-handle-failure";
const RECOVER_ACCOUNT_HANDLE_RESET =
  "opacity/authentication/recover-account-handle-reset";

const ACTIONS = Object.freeze({
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_ACCOUNT_DATA_SUCCESS,
  FETCH_ACCOUNT_DATA_FAILURE,
  RECOVER_ACCOUNT_HANDLE,
  RECOVER_ACCOUNT_HANDLE_SUCCESS,
  RECOVER_ACCOUNT_HANDLE_FAILURE,
  RECOVER_ACCOUNT_HANDLE_RESET,

  loginPending: ({ privateKey }) => ({
    type: LOGIN_PENDING,
    payload: { privateKey }
  }),
  loginSuccess: ({ masterHandle }) => ({
    type: LOGIN_SUCCESS,
    payload: { masterHandle }
  }),
  loginFailure: ({ error }) => ({
    type: LOGIN_FAILURE,
    payload: { error }
  }),
  logout: () => ({
    type: LOGOUT
  }),
  fetchAccountDataSuccess: ({ storageUsed, storageLimit, expirationDate }) => ({
    type: FETCH_ACCOUNT_DATA_SUCCESS,
    payload: { storageUsed, storageLimit, expirationDate }
  }),
  fetchAccountDataFailure: ({ error }) => ({
    type: FETCH_ACCOUNT_DATA_FAILURE,
    payload: { error }
  }),
  recoverAccountHandle: ({ recoverWords }) => ({
    type: RECOVER_ACCOUNT_HANDLE,
    payload: { recoverWords }
  }),
  recoverAccountHandleSuccess: ({ handle }) => ({
    type: RECOVER_ACCOUNT_HANDLE_SUCCESS,
    payload: { handle }
  }),
  recoverAccountHandleFailure: ({ error }) => ({
    type: RECOVER_ACCOUNT_HANDLE_FAILURE,
    payload: { error }
  }),
  recoverAccountHandleReset: () => ({
    type: RECOVER_ACCOUNT_HANDLE_RESET
  })
});

export default ACTIONS;
