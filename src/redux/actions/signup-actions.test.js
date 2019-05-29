import actions from "./signup-actions";

test("showMnemonic", () => {
  const expected = {
    type: actions.SHOW_MNEMONIC
  };
  expect(actions.showMnemonic()).toEqual(expected);
});

test("showAddress", () => {
  const expected = {
    type: actions.SHOW_ADDRESS
  };
  expect(actions.showAddress()).toEqual(expected);
});

test("pollPayment", () => {
  const waitForPaymentFn = jest.fn();
  const expected = {
    type: actions.POLL_PAYMENT,
    payload: {
      waitForPaymentFn
    }
  };
  expect(actions.pollPayment({ waitForPaymentFn })).toEqual(expected);
});

test("accountPaidSuccess", () => {
  const expected = {
    type: actions.ACCOUNT_PAID_SUCCESS
  };
  expect(actions.accountPaidSuccess()).toEqual(expected);
});

test("accountPaidFailure", () => {
  const error = new Error("foobar");
  const expected = {
    type: actions.ACCOUNT_PAID_FAILURE,
    payload: {
      error
    }
  };
  expect(actions.accountPaidFailure({ error })).toEqual(expected);
});
