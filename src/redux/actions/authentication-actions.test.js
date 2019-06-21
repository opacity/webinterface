import actions from "./authentication-actions";

test("loginPending", () => {
  const privateKey = "foo";

  const expected = {
    type: actions.LOGIN_PENDING,
    payload: {
      privateKey
    }
  };
  expect(actions.loginPending({ privateKey })).toEqual(expected);
});

test("loginSuccess", () => {
  const masterHandle = "mh1";

  const expected = {
    type: actions.LOGIN_SUCCESS,
    payload: {
      masterHandle
    }
  };
  expect(actions.loginSuccess({ masterHandle })).toEqual(expected);
});

test("loginFailure", () => {
  const error = new Error();

  const expected = {
    type: actions.LOGIN_FAILURE,
    payload: {
      error
    }
  };
  expect(actions.loginFailure({ error })).toEqual(expected);
});

test("logout", () => {
  const expected = {
    type: actions.LOGOUT
  };
  expect(actions.logout()).toEqual(expected);
});

test("fetchAccountDataSuccess", () => {
  const storageUsed = 1;
  const storageLimit = 2;
  const expirationDate = 3;

  const expected = {
    type: actions.FETCH_ACCOUNT_DATA_SUCCESS,
    payload: {
      storageUsed,
      storageLimit,
      expirationDate
    }
  };
  expect(
    actions.fetchAccountDataSuccess({
      storageUsed,
      storageLimit,
      expirationDate
    })
  ).toEqual(expected);
});

test("fetchAccountDataFailure", () => {
  const error = "e1";

  const expected = {
    type: actions.FETCH_ACCOUNT_DATA_FAILURE,
    payload: {
      error
    }
  };
  expect(
    actions.fetchAccountDataFailure({
      error
    })
  ).toEqual(expected);
});
