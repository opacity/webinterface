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
