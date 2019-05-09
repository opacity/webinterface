const LOGIN_PENDING = "opacity/authentication/login-pending";
const LOGIN_SUCCESS = "opacity/authentication/login-success";
const LOGIN_FAILURE = "opacity/authentication/login-failure";
const LOGOUT = "opacity/authentication/logout";

const ACTIONS = Object.freeze({
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,

  loginPending: ({ storagePin, privateKey }) => ({
    type: LOGIN_PENDING,
    payload: { storagePin, privateKey }
  }),
  loginSuccess: ({ accountId }) => ({
    type: LOGIN_SUCCESS,
    payload: { accountId }
  }),
  loginFailure: ({ error }) => ({
    type: LOGIN_FAILURE,
    payload: { error }
  }),
  logout: () => ({
    type: LOGOUT
  })
});

export default ACTIONS;
