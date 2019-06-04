const LOGIN_PENDING = "opacity/authentication/login-pending";
const LOGIN_SUCCESS = "opacity/authentication/login-success";
const LOGIN_FAILURE = "opacity/authentication/login-failure";
const LOGOUT = "opacity/authentication/logout";
const FETCH_ACCOUNT_DATA_SUCCESS =
  "opacity/authentication/fetch-account-data-success";
const FETCH_ACCOUNT_DATA_FAILURE =
  "opacity/authentication/fetch-account-data-failure";

const ACTIONS = Object.freeze({
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_ACCOUNT_DATA_SUCCESS,
  FETCH_ACCOUNT_DATA_FAILURE,

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
  })
});

export default ACTIONS;
