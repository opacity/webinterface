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

//TODO - recoverAccountHandleEpic
//test("recoverAccountHandleEpic", done => {
//  const mnemonic =
//    "melody gift such planet distance best panic kit release predict six view";
//  const action$ = of(
//   authenticationActions.recoverAccountHandle({
//     mnemonic
//   })
// );

// authenticationEpic(action$)
//   .toArray()
//   .subscribe(actions => {
//     expect(actions).toEqual([
//       authenticationActions.recoverAccountHandleSuccess({
//         handle:
//           "4ce17cf018597e77708e25b03ec176bb59bd01e4cc63380f6c9dffc9b8bac0a0609dd6f101df271def959d1ba9609b0647040713efe5fd5e91042701118ce2f9"
//       }),
//       push("/login")
//     ]);
//     done();
//    });
//});
