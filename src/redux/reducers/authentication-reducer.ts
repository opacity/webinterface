import authenticationActions from "../actions/authentication-actions";
import { AUTHENTICATION_STATUSES } from "../../config";

const initState = {
  status: AUTHENTICATION_STATUSES.LOGGED_OUT,
  masterHandle: null,
  storageUsed: 0,
  storageLimit: 0,
  expirationDate: null,
  recoveryHandle: null,
  hasError: null
};

const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    case authenticationActions.LOGIN_PENDING:
      return { ...state, status: AUTHENTICATION_STATUSES.LOGIN_PENDING };
    case authenticationActions.LOGIN_FAILURE:
      return { ...state, status: AUTHENTICATION_STATUSES.LOGIN_FAILURE };
    case authenticationActions.LOGIN_SUCCESS:
      const { masterHandle } = action.payload;
      return {
        ...state,
        status: AUTHENTICATION_STATUSES.LOGGED_IN,
        masterHandle
      };
    case authenticationActions.LOGOUT:
      return initState;

    case authenticationActions.RECOVER_ACCOUNT_HANDLE_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        hasError: error
      };

    case authenticationActions.RESET_RECOVER_ERROR:
      return {
        ...state,
        hasError: null
      };

    case authenticationActions.FETCH_ACCOUNT_DATA_SUCCESS:
      const { storageUsed, storageLimit, expirationDate } = action.payload;
      return {
        ...state,
        storageUsed,
        storageLimit,
        expirationDate
      };

    case authenticationActions.RECOVER_ACCOUNT_HANDLE_SUCCESS:
      const { handle } = action.payload;
      return {
        ...state,
        recoveryHandle: handle
      };

    case authenticationActions.RESET_ACCOUNT_HANDLE:
      return {
        ...state,
        recoveryHandle: null
      };

    default:
      return state;
  }
};

export default authenticationReducer;
