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

test("recoverAccountHandle", () => {
  const mnemonic = "mnemonic";

  const expected = {
    type: actions.RECOVER_ACCOUNT_HANDLE,
    payload: {
      mnemonic
    }
  };
  expect(
    actions.recoverAccountHandle({
      mnemonic
    })
  ).toEqual(expected);
});

test("recoverAccountHandleSuccess", () => {
  const handle = "handle";

  const expected = {
    type: actions.RECOVER_ACCOUNT_HANDLE_SUCCESS,
    payload: {
      handle
    }
  };
  expect(
    actions.recoverAccountHandleSuccess({
      handle
    })
  ).toEqual(expected);
});

test("recoverAccountHandleFailure", () => {
  const error = "error";

  const expected = {
    type: actions.RECOVER_ACCOUNT_HANDLE_FAILURE,
    payload: {
      error
    }
  };
  expect(
    actions.recoverAccountHandleFailure({
      error
    })
  ).toEqual(expected);
});

test("resetAccountHandle", () => {
  const expected = {
    type: actions.RESET_ACCOUNT_HANDLE
  };
  expect(actions.resetAccountHandle()).toEqual(expected);
});

test("resetAccountHandle", () => {
  const expected = {
    type: actions.RESET_RECOVER_ERROR
  };
  expect(actions.resetRecoverError()).toEqual(expected);
});
