import actions from "./metamask-actions";

test("createTransaction", () => {
  const cost = 1.5;
  const ethAddress = "0x0x";
  const gasPrice = 20;

  const expected = {
    type: actions.CREATE_TRANSACTION,
    payload: {
      cost,
      ethAddress,
      gasPrice
    }
  };
  expect(actions.createTransaction({ cost, ethAddress, gasPrice })).toEqual(
    expected
  );
});

test("paymentPending", () => {
  const to = "0x0x123";
  const from = "0x0x234";
  const cost = 1.5;
  const gasPrice = 20;

  const expected = {
    type: actions.PAYMENT_PENDING,
    payload: {
      to,
      from,
      cost,
      gasPrice
    }
  };
  expect(actions.paymentPending({ to, from, cost, gasPrice })).toEqual(
    expected
  );
});

test("paymentSuccess", () => {
  const expected = {
    type: actions.PAYMENT_SUCCESS
  };
  expect(actions.paymentSuccess()).toEqual(expected);
});

test("paymentError", () => {
  const error = new Error();

  const expected = {
    type: actions.PAYMENT_ERROR,
    payload: {
      error
    }
  };
  expect(actions.paymentError({ error })).toEqual(expected);
});

test("accountError", () => {
  const error = new Error();

  const expected = {
    type: actions.ACCOUNT_ERROR,
    payload: {
      error
    }
  };
  expect(actions.accountError({ error })).toEqual(expected);
});
