import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { push } from "connected-react-router";

import signupActions from "../actions/signup-actions";
import signupEpic from "./signup-epic";

test("pollPaymentEpic on success", done => {
  const signup = ["foo", "bar"];
  const waitForPaymentFn = jest.fn(() => Promise.resolve());
  const action$ = of(signupActions.pollPayment({ waitForPaymentFn }));

  signupEpic(action$).subscribe(actions => {
    expect(actions).toEqual(signupActions.accountPaidSuccess());
    done();
  });
});

test("pollPaymentEpic on failure", done => {
  const signup = ["foo", "bar"];
  const waitForPaymentFn = jest.fn(() => Promise.reject("foobar"));
  const action$ = of(signupActions.pollPayment({ waitForPaymentFn }));

  signupEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      signupActions.accountPaidFailure({ error: "foobar" })
    );
    done();
  });
});

test("checkoutPlanEpic", () => {
  const plan = "foobar";
  const action$ = of(signupActions.checkoutPlan({ plan }));

  signupEpic(action$).subscribe(actions => {
    expect(actions).toEqual(push("/sign-up"));
  });
});
