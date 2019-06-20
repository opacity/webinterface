import authentication from "./authentication-reducer";
import authenticationActions from "../actions/authentication-actions";
import { AUTHENTICATION_STATUSES } from "../../config";

const initState = {
  status: AUTHENTICATION_STATUSES.LOGGED_OUT,
  masterHandle: null,
  storageUsed: 0,
  storageLimit: 0,
  expirationDate: null,
  recoverHandle: null
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
