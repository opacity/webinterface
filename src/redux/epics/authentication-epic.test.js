import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { push } from "connected-react-router";
import { MasterHandle } from "opaque";

import authenticationActions from "../actions/authentication-actions";
import authenticationEpic from "./authentication-epic";

jest.mock("opaque", () => ({
  MasterHandle: jest.fn()
}));

const masterHandle = {
  isPaid: jest.fn().mockResolvedValue(true),
  login: jest.fn().mockResolvedValue()
};

MasterHandle.mockImplementation(() => masterHandle);

test("loginEpic", done => {
  const privateKey = "p1";
  const action$ = of(authenticationActions.loginPending({ privateKey }));

  authenticationEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual([
        authenticationActions.loginSuccess({
          masterHandle
        }),
        authenticationActions.resetAccountHandle(),
        push("/file-manager")
      ]);
      done();
    });
});
