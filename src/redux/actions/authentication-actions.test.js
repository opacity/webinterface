import actions from "./authentication-actions";

test("LOGIN_PENDING", () => {
  const privateKey = "foo";
  const storagePin = "bar";

  const expected = {
    type: actions.LOGIN_PENDING,
    payload: {
      privateKey,
      storagePin
    }
  };
  expect(actions.loginPending({ privateKey, storagePin })).toEqual(expected);
});

test("LOGIN_SUCCESS", () => {
  const metadataKey = "foo";

  const expected = {
    type: actions.LOGIN_SUCCESS,
    payload: {
      metadataKey
    }
  };
  expect(actions.loginSuccess({ metadataKey })).toEqual(expected);
});

test("LOGIN_FAILURE", () => {
  const error = new Error();

  const expected = {
    type: actions.LOGIN_FAILURE,
    payload: {
      error
    }
  };
  expect(actions.loginFailure({ error })).toEqual(expected);
});
