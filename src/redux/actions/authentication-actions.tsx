const LOGIN_PENDING = "opacity/login/login-pending";
const LOGIN_SUCCESS = "opacity/login/login-success";
const LOGIN_FAILURE = "opacity/login/login-failure";

const ACTIONS = Object.freeze({
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

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
  })
});

export default ACTIONS;
