import fiatPaymentReducer from "./fiat-payment-reducer";
import fiatPaymentActions from "../actions/fiat-payment-actions";

import { FIAT_PAYMENT_STATUSES } from "../../config";

const initState = {
  status: FIAT_PAYMENT_STATUSES.IDLE,
  error: null
};

test("fiatPaymentReducer PAY_FIAT", () => {
  const token = "t1";
  const masterHandle = "m1";

  const modifiedInitState = {
    ...initState,
    error: new Error("e1")
  };

  const action = {
    type: fiatPaymentActions.PAY_FIAT,
    payload: {
      token,
      masterHandle
    }
  };

  const expected = {
    ...initState,
    status: FIAT_PAYMENT_STATUSES.PENDING,
    error: null
  };
  expect(fiatPaymentReducer(initState, action)).toEqual(expected);
});

test("fiatPaymentReducer PAY_FIAT_SUCCESS", () => {
  const modifiedInitState = {
    ...initState,
    error: new Error("e1")
  };

  const action = {
    type: fiatPaymentActions.PAY_FIAT_SUCCESS
  };

  const expected = {
    ...initState,
    status: FIAT_PAYMENT_STATUSES.SUCCESS,
    error: null
  };
  expect(fiatPaymentReducer(initState, action)).toEqual(expected);
});

test("fiatPaymentReducer PAY_FIAT_FAILURE", () => {
  const error = new Error("e1");
  const action = {
    type: fiatPaymentActions.PAY_FIAT_FAILURE,
    payload: { error }
  };

  const expected = {
    ...initState,
    status: FIAT_PAYMENT_STATUSES.ERROR,
    error
  };
  expect(fiatPaymentReducer(initState, action)).toEqual(expected);
});
