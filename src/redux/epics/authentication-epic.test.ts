import { ActionsObservable } from "redux-observable";
import "rxjs/add/operator/toArray";
import { push } from "react-router-redux";

const FAKE_METADATA_KEY = "foobar"

jest.mock("node-forge", () => ({
  md: {
    sha256: {
      create: () => ({
        update: () => {},
        digest: () => ({ toHex: () => FAKE_METADATA_KEY })
      })
    }
  }
}));

jest.mock("../../services/backend", () => ({
  login: ({ metadataKey }) => new Promise((resolve, reject) => resolve())
}));

import authenticationActions from "../actions/authentication-actions";
import authenticationEpic from "./authentication-epic";

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
      console.log("print!!!!!");
      expect(actions).toEqual([
        authenticationActions.loginSuccess({ metadataKey: FAKE_METADATA_KEY }),
        push("/file-manager")
      ]);
      done();
    });
});
