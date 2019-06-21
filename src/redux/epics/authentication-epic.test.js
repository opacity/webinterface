import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { push } from "connected-react-router";
import { MasterHandle } from "opaque";

import authenticationActions from "../actions/authentication-actions";
import authenticationEpic from "./authentication-epic";

jest.mock("opaque", () => ({
  MasterHandle: jest.fn(),
  Account: jest.fn()
}));

test("loginEpic", done => {
  const masterHandle = {
    isPaid: jest.fn().mockResolvedValue(true),
    login: jest.fn().mockResolvedValue()
  };

  MasterHandle.mockImplementation(() => masterHandle);

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

test("recoverAccountHandleEpic on success", done => {
  const masterHandle = {
    handle: "h1"
  };

  MasterHandle.mockImplementation(() => masterHandle);

  const mnemonic =
    "melody gift such planet distance best panic kit release predict six view";
  const action$ = of(
    authenticationActions.recoverAccountHandle({
      mnemonic
    })
  );

  authenticationEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual([
        authenticationActions.recoverAccountHandleSuccess({
          handle: "h1"
        }),
        push("/login")
      ]);
      done();
    });
});

test("recoverAccountHandleEpic on error (missing account handle)", done => {
  const masterHandle = {
    handle: ""
  };

  MasterHandle.mockImplementation(() => masterHandle);

  const mnemonic =
    "melody gift such planet distance best panic kit release predict six view";
  const action$ = of(
    authenticationActions.recoverAccountHandle({
      mnemonic
    })
  );

  authenticationEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      authenticationActions.recoverAccountHandleFailure({
        error: new Error("Missing Account Handle")
      })
    );
    done();
  });
});

test("recoverAccountHandleEpic on error (invalid mnemonic)", done => {
  const masterHandle = {
    handle: null
  };

  MasterHandle.mockImplementation(() => masterHandle);

  const mnemonic =
    "melody gift such planet distance best panic kit release predict six view";
  const action$ = of(
    authenticationActions.recoverAccountHandle({
      mnemonic
    })
  );

  authenticationEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      authenticationActions.recoverAccountHandleFailure({
        error: new Error("Mnemonic words provided was not valid")
      })
    );
    done();
  });
});
