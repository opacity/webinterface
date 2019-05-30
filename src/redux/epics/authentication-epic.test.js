import { ActionsObservable } from "redux-observable";
import "rxjs/add/operator/toArray";
import { push } from "connected-react-router";
import { MasterHandle } from "opaque";

import authenticationActions from "../actions/authentication-actions";
import authenticationEpic from "./authentication-epic";

jest.mock("opaque", () => ({
  MasterHandle: jest.fn()
}));

const masterHandle = {
  isPaid: jest.fn().mockResolvedValue(true)
};

MasterHandle.mockImplementation(() => masterHandle);

test("loginEpic", done => {
  const action$ = ActionsObservable.of({
    type: authenticationActions.LOGIN_PENDING,
    payload: {
      privateKey: "foo"
    }
  });
  const state$ = null;
  const dependencies$ = {};

  authenticationEpic(action$, state$, dependencies$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual([
        authenticationActions.loginSuccess({
          masterHandle
        }),
        push("/file-manager")
      ]);
      done();
    });
});
