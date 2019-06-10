import actions from "./subscription-actions";

test("setSubscription", () => {
  const item = "foobar";

  const expected = {
    type: actions.SET_SUBSCRIPTION,
    payload: {
      item
    }
  };
  expect(actions.setSubscription({ item })).toEqual(expected);
});
