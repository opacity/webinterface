import { ActionsObservable } from "redux-observable";
import "rxjs/add/operator/toArray";
import { push } from "react-router-redux";

import authenticationActions from "../actions/authentication-actions";
import authenticationEpic from "./authentication-epic";

jest.mock("../../services/backend", () => ({
  login: ({ accountId }) => new Promise((resolve, reject) => resolve())
}));

jest.mock("../../services/account", () => ({
  getMetadataKey: () => "FAKE_METADATA_KEY",
  getAccountId: () => "FAKE_ACCOUNT_ID"
}));

test("authenticationEpic loginEpic", async done => {
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
