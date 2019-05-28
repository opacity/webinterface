import authentication from "./authentication-reducer";
import authenticationActions from "../actions/authentication-actions";
import { AUTHENTICATION_STATUSES } from "../../config";

const initState = {
  status: AUTHENTICATION_STATUSES.LOGGED_OUT,
  accountId: null,
  metadataKey: null,
  metadata: null,
  masterHandle: null
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
      accountId: "a1",
      metadataKey: "mk1",
      metadata: "m1",
      masterHandle: "mh1"
    }
  };
  const expected = {
    ...initState,
    status: AUTHENTICATION_STATUSES.LOGGED_IN,
    accountId: "a1",
    metadataKey: "mk1",
    metadata: "m1",
    masterHandle: "mh1"
  };

  expect(authentication(initState, action)).toEqual(expected);
});

test("authentication-reducer LOGOUT", () => {
  const action = {
    type: authenticationActions.LOGOUT
  };

  expect(authentication(initState, action)).toEqual(initState);
});
