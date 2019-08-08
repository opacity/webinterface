import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { push } from "connected-react-router";

import BackendService from "../../services/backend";

import fiatPaymentActions from "../actions/fiat-payment-actions";
import fiatPaymentEpic from "./fiat-payment-epic";

jest.mock("../../services/backend", () => ({
  __esModule: true,
  default: {
    createSubscription: jest.fn()
  }
}));

test("payFiatEpic on success", done => {
  const stripeToken = "s1";
  const masterHandle = "m1";
  const timestamp = 100000000;

  BackendService.createSubscription.mockResolvedValue();

  const action$ = of(
    fiatPaymentActions.payFiat({ stripeToken, masterHandle, timestamp })
  );

  fiatPaymentEpic(action$).subscribe(actions => {
    expect(actions).toEqual(fiatPaymentActions.payFiatSuccess());
    done();
  });
});

test("payFiatEpic on failure", done => {
  const stripeToken = "s1";
  const masterHandle = "m1";
  const timestamp = 100000000;
  const error = new Error("e1");

  BackendService.createSubscription.mockRejectedValue(error);

  const action$ = of(
    fiatPaymentActions.payFiat({ stripeToken, masterHandle, timestamp })
  );

  fiatPaymentEpic(action$).subscribe(actions => {
    expect(actions).toEqual(fiatPaymentActions.payFiatFailure({ error }));
    done();
  });
});
