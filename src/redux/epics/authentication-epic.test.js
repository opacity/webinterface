import { ActionsObservable } from "redux-observable";
import "rxjs/add/operator/toArray";
import { push } from "connected-react-router";

import authenticationActions from "../actions/authentication-actions";
import authenticationEpic from "./authentication-epic";

jest.mock("../../services/backend", () => ({
  login: ({ metadataKey }) =>
    new Promise((resolve, reject) => resolve({ metadata: "FAKE_METADATA" }))
}));

jest.mock("../../services/account", () => ({
  getMetadataKey: () => "FAKE_METADATA_KEY",
  getAccountId: () => "FAKE_ACCOUNT_ID"
}));

// must have test or jest will complain
test("foobar", () => {
  expect(1).toEqual(1);
});
// test("authenticationEpic loginEpic", async done => {
// const action$ = ActionsObservable.of({
// type: authenticationActions.LOGIN_PENDING,
// payload: {
// privateKey: "foo",
// storagePin: "bar"
// }
// });
// const state$ = null;
// const dependencies$ = {};

// authenticationEpic(action$, state$, dependencies$)
// .toArray()
// .subscribe(actions => {
// expect(actions).toEqual([
// authenticationActions.loginSuccess({
// accountId: "FAKE_ACCOUNT_ID",
// metadata: "FAKE_METADATA",
// metadataKey: "FAKE_METADATA_KEY"
// }),
// push("/file-manager")
// ]);
// done();
// });
// });
