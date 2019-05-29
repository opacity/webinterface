import { ActionsObservable } from "redux-observable";
import "rxjs/add/operator/toArray";
import { push } from "connected-react-router";

import authenticationActions from "../actions/authentication-actions";
import authenticationEpic from "./authentication-epic";

jest.mock("../../services/account", () => ({
  getAccountId: () => "FAKE_ACCOUNT_ID"
}));

jest.mock("opaque", () => ({
  MasterHandle: class {
    isPaid = () => Promise.resolve(true);
  }
}));

test("authenticationEpic loginEpic", done => {
  const action$ = ActionsObservable.of({
    type: authenticationActions.LOGIN_PENDING,
    payload: {
      privateKey: "foo",
      storagePin: "bar"
    }
  });
  const state$ = null;
  const dependencies$ = {};

  authenticationEpic(action$, state$, dependencies$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual([
        authenticationActions.loginSuccess({
          accountId: "FAKE_ACCOUNT_ID"
        }),
        push("/file-manager")
      ]);
      done();
    });
});
