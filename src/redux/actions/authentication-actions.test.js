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
  const accountId = "a1";
  const metadataKey = "mk1";
  const metadata = "m1";
  const masterHandle = "mh1";

  const expected = {
    type: actions.LOGIN_SUCCESS,
    payload: {
      accountId,
      metadataKey,
      metadata,
      masterHandle
    }
  };
  expect(
    actions.loginSuccess({ accountId, metadataKey, metadata, masterHandle })
  ).toEqual(expected);
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
