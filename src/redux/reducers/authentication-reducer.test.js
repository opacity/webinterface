import authentication from "./authentication-reducer";
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

test("authentication-reducer LOGIN_PENDING", () => {
  const action = {
    type: authenticationActions.LOGIN_PENDING
  };
  const expected = {
    ...initState,
    status: AUTHENTICATION_STATUSES.LOGIN_PENDING
  };

  expect(authentication(initState, action)).toEqual(expected);
});

test("authentication-reducer LOGIN_FAILURE", () => {
  const action = {
    type: authenticationActions.LOGIN_FAILURE
  };
  const expected = {
    ...initState,
    status: AUTHENTICATION_STATUSES.LOGIN_FAILURE
  };

  expect(authentication(initState, action)).toEqual(expected);
});

test("authentication-reducer LOGIN_SUCCESS", () => {
  const action = {
    type: authenticationActions.LOGIN_SUCCESS,
    payload: {
      masterHandle: "mh1"
    }
  };
  const expected = {
    ...initState,
    status: AUTHENTICATION_STATUSES.LOGGED_IN,
    masterHandle: "mh1"
  };

  expect(authentication(initState, action)).toEqual(expected);
});

test("authentication-reducer LOGOUT", () => {
  const modifiedState = {
    ...initState,
    status: AUTHENTICATION_STATUSES.LOGGED_IN,
    masterHandle: "m1",
    storageUsed: 1,
    storageLimit: 2,
    expirationDate: new Date()
  };
  const action = {
    type: authenticationActions.LOGOUT
  };

  expect(authentication(modifiedState, action)).toEqual(initState);
});

test("authentication-reducer FETCH_ACCOUNT_DATA_SUCCESS", () => {
  const storageUsed = 1;
  const storageLimit = 2;
  const expirationDate = 3;

  const action = {
    type: authenticationActions.FETCH_ACCOUNT_DATA_SUCCESS,
    payload: {
      storageUsed,
      storageLimit,
      expirationDate
    }
  };
  const expected = {
    ...initState,
    storageUsed,
    storageLimit,
    expirationDate
  };

  expect(authentication(initState, action)).toEqual(expected);
});

test("authentication-reducer RECOVER_ACCOUNT_HANDLE_SUCCESS && RESET_ACCOUNT_HANDLE", () => {
  const handle = "handle";

  const action = {
    type: authenticationActions.RECOVER_ACCOUNT_HANDLE_SUCCESS,
    payload: {
      handle
    }
  };
  const expected = {
    ...initState,
    recoveryHandle: handle
  };

  expect(authentication(initState, action)).toEqual(expected);
});

test("authentication-reducer RESET_ACCOUNT_HANDLE", () => {
  const state = {
    status: AUTHENTICATION_STATUSES.LOGGED_OUT,
    masterHandle: null,
    storageUsed: 0,
    storageLimit: 0,
    expirationDate: null,
    recoveryHandle: "handle",
    hasError: null
  };
  const action = {
    type: authenticationActions.RESET_ACCOUNT_HANDLE
  };

  expect(authentication(state, action)).toEqual(initState);
});

test("authentication-reducer RECOVER_ACCOUNT_HANDLE_FAILURE", () => {
  const error = new Error("aa");
  const action = {
    type: authenticationActions.RECOVER_ACCOUNT_HANDLE_FAILURE,
    payload: { error }
  };
  const expected = {
    ...initState,
    hasError: error
  };

  expect(authentication(initState, action)).toEqual(expected);
});

test("authentication-reducer RESET_RECOVER_ERROR", () => {
  const error = new Error("e1");
  const state = {
    status: AUTHENTICATION_STATUSES.LOGGED_OUT,
    masterHandle: null,
    storageUsed: 0,
    storageLimit: 0,
    expirationDate: null,
    recoveryHandle: null,
    hasError: error
  };
  const action = {
    type: authenticationActions.RESET_RECOVER_ERROR
  };
  const expected = {
    ...initState,
    hasError: null
  };

  expect(authentication(state, action)).toEqual(expected);
});
