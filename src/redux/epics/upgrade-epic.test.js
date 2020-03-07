import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { push } from "connected-react-router";

import upgradeActions from "../actions/upgrade-actions";
import signupEpic from "./upgrade-epic";

test("pollPaymentEpic on success", done => {
  const upgrade = ["foo", "bar"];
  const waitForPaymentFn = jest.fn(() => Promise.resolve());
  const action$ = of(upgradeActions.pollPayment({ waitForPaymentFn }));

  signupEpic(action$).subscribe(actions => {
    expect(actions).toEqual(upgradeActions.accountPaidSuccess());
    done();
  });
});

test("pollPaymentEpic on failure", done => {
  const upgrade = ["foo", "bar"];
  const waitForPaymentFn = jest.fn(() => Promise.reject("foobar"));
  const action$ = of(upgradeActions.pollPayment({ waitForPaymentFn }));

  signupEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      upgradeActions.accountPaidFailure({ error: "foobar" })
    );
    done();
  });
});
