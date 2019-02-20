import actions from "./signup-actions";

test("signup-action DOWNLOAD", () => {
  const privateKey = "privateKey";
  const expected = {
    type: actions.SET_PRIVATE_KEY,
    payload: {
      privateKey
    }
  };
  expect(actions.setPrivateKey({ privateKey })).toEqual(expected);
});
