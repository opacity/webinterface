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
  const accountId = "foo";

  const expected = {
    type: actions.LOGIN_SUCCESS,
    payload: {
      accountId
    }
  };
  expect(actions.loginSuccess({ accountId })).toEqual(expected);
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
