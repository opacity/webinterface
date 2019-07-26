import actions from "./fiat-payment-actions";

test("payFiat", () => {
  const stripeToken = "t1";
  const masterHandle = "m1";
  const timestamp = 100000000;
  const expected = {
    type: actions.PAY_FIAT,
    payload: {
      stripeToken,
      masterHandle,
      timestamp
    }
  };
  expect(actions.payFiat({ stripeToken, masterHandle, timestamp })).toEqual(
    expected
  );
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
