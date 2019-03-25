import actions from "./signup-actions";

test("signup-action setPrivateKey", () => {
  const privateKey = "privateKey";
  const expected = {
    type: actions.SET_PRIVATE_KEY,
    payload: {
      privateKey
    }
  };
  expect(actions.setPrivateKey({ privateKey })).toEqual(expected);
});

test("signup-action getInvoicePending", () => {
  const privateKey = "privateKey";
  const storagePin = "123";
  const expected = {
    type: actions.GET_INVOICE_PENDING,
    payload: {
      privateKey,
      storagePin
    }
  };
  expect(actions.getInvoicePending({ privateKey, storagePin })).toEqual(
    expected
  );
});

test("signup-action getInvoiceSuccess", () => {
  const accountId = "abc";
  const invoice = { cost: 123, ethAddress: "0x0x" };
  const expected = {
    type: actions.GET_INVOICE_SUCCESS,
    payload: {
      accountId,
      invoice
    }
  };
  expect(actions.getInvoiceSuccess({ accountId, invoice })).toEqual(expected);
});

test("signup-action getInvoiceFailure", () => {
  const error = new Error("Foobar");
  const expected = {
    type: actions.GET_INVOICE_FAILURE,
    payload: {
      error
    }
  };
  expect(actions.getInvoiceFailure({ error })).toEqual(expected);
});

test("signup-action accountPaidSuccess", () => {
  const expected = {
    type: actions.ACCOUNT_PAID_SUCCESS
  };
  expect(actions.accountPaidSuccess()).toEqual(expected);
});

test("signup-action accountPaidFailure", () => {
  const error = new Error("Foobar");
  const expected = {
    type: actions.ACCOUNT_PAID_FAILURE,
    payload: {
      error
    }
  };
  expect(actions.accountPaidFailure({ error })).toEqual(expected);
});
