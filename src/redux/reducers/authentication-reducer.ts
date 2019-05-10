import authenticationActions from "../actions/authentication-actions";
import { AUTHENTICATION_STATUSES } from "../../config";

const initState = {
  status: AUTHENTICATION_STATUSES.LOGGED_OUT,
  accountId: null,
  metadataKey: null,
  metadata: null
};

const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    case authenticationActions.LOGIN_PENDING:
      return { ...state, status: AUTHENTICATION_STATUSES.LOGIN_PENDING };
    case authenticationActions.LOGIN_FAILURE:
      return { ...state, status: AUTHENTICATION_STATUSES.LOGIN_FAILURE };
    case authenticationActions.LOGIN_SUCCESS:
      const { accountId, metadataKey, metadata } = action.payload;
      return {
        ...state,
        status: AUTHENTICATION_STATUSES.LOGGED_IN,
        accountId,
        metadataKey,
        metadata
      };
    case authenticationActions.LOGOUT:
      return initState;

    default:
      return state;
  }
};

export default authenticationReducer;
