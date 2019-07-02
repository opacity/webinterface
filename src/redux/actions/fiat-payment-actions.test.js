import actions from "./fiat-payment-actions";

test("payFiat", () => {
  const token = "t1";
  const masterHandle = "m1";
  const expected = {
    type: actions.PAY_FIAT,
    payload: {
      token,
      masterHandle
    }
  };
  expect(actions.payFiat({ token, masterHandle })).toEqual(expected);
});

test("payFiatSuccess", () => {
  const expected = {
    type: actions.PAY_FIAT_SUCCESS
  };
  expect(actions.payFiatSuccess()).toEqual(expected);
});

test("payFiatFailure", () => {
  const error = new Error("e1");
  const expected = {
    type: actions.PAY_FIAT_FAILURE,
    payload: { error }
  };
  expect(actions.payFiatFailure({ error })).toEqual(expected);
});
