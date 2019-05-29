const LOGIN_PENDING = "opacity/authentication/login-pending";
const LOGIN_SUCCESS = "opacity/authentication/login-success";
const LOGIN_FAILURE = "opacity/authentication/login-failure";
const LOGOUT = "opacity/authentication/logout";

const ACTIONS = Object.freeze({
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,

  loginPending: ({ privateKey }) => ({
    type: LOGIN_PENDING,
    payload: { privateKey }
  }),
  loginSuccess: ({ accountId, metadata, masterHandle }) => ({
    type: LOGIN_SUCCESS,
    payload: { accountId, metadata, masterHandle }
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
