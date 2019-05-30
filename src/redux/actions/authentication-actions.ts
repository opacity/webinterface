const LOGIN_PENDING = "opacity/authentication/login-pending";
const LOGIN_SUCCESS = "opacity/authentication/login-success";
const LOGIN_FAILURE = "opacity/authentication/login-failure";
const UPDATE_METADATA_SUCCESS = "opacity/upload/update-metadata-success";
const UPDATE_METADATA_ERROR = "opacity/upload/update-metadata-error";
const LOGOUT = "opacity/authentication/logout";

const ACTIONS = Object.freeze({
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_METADATA_SUCCESS,
  UPDATE_METADATA_ERROR,
  LOGOUT,

  loginPending: ({ privateKey }) => ({
    type: LOGIN_PENDING,
    payload: { privateKey }
  }),
  loginSuccess: ({ accountId, metadataKey, metadata, masterHandle }) => ({
    type: LOGIN_SUCCESS,
    payload: { accountId, metadata, metadataKey, masterHandle }
  }),
  loginFailure: ({ error }) => ({
    type: LOGIN_FAILURE,
    payload: { error }
  }),
  updateMetadataSuccess: ({ metadata }) => ({
    type: UPDATE_METADATA_SUCCESS,
    payload: { metadata }
  }),
  updateMetadataFailure: ({ error }) => ({
    type: UPDATE_METADATA_ERROR,
    payload: { error }
  }),
  logout: () => ({
    type: LOGOUT
  })
});

export default ACTIONS;
