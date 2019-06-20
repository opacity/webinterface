import { from, of } from "rxjs";
import { switchMap, flatMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";
import { push } from "connected-react-router";

import authenticationActions from "../actions/authentication-actions";
import { OPAQUE } from "../../config";

import { MasterHandle, Account } from "opaque";

const loginEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(authenticationActions.LOGIN_PENDING),
    switchMap(({ payload }) => {
      const { privateKey } = payload;

      const masterHandle: MasterHandle = new MasterHandle(
        {
          handle: privateKey
        },
        {
          uploadOpts: OPAQUE.UPLOAD_OPTIONS,
          downloadOpts: OPAQUE.DOWNLOAD_OPTIONS
        }
      );

      return from(masterHandle.isPaid()).pipe(
        flatMap(isPaid => {
          if (isPaid) {
            return from(masterHandle.login()).pipe(
              flatMap(() => [
                authenticationActions.loginSuccess({
                  masterHandle
                }),
                authenticationActions.recoverAccountHandleReset(),
                push("/file-manager")
              ])
            );
          } else {
            return [
              authenticationActions.loginFailure({
                error: new Error(
                  "Please complete your payment before accessing your account"
                )
              })
            ];
          }
        }),
        catchError(error => of(authenticationActions.loginFailure({ error })))
      );
    })
  );

const recoverAccountHandleEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(authenticationActions.RECOVER_ACCOUNT_HANDLE),
    switchMap(({ payload }) => {
      const { recoverWords } = payload;
      try {
        const account = new Account(recoverWords);
        const masterHandle: MasterHandle = new MasterHandle(
          { account },
          {
            uploadOpts: OPAQUE.UPLOAD_OPTIONS,
            downloadOpts: OPAQUE.DOWNLOAD_OPTIONS
          }
        );
        const handle = masterHandle.handle;
        if (handle.length > 0) {
          return [
            authenticationActions.recoverAccountHandleSuccess({ handle }),
            push("/login")
          ];
        } else {
          return of(
            authenticationActions.recoverAccountHandleFailure({
              error: new Error("Missing Account Handle")
            })
          );
        }
      } catch (error) {
        return of(
          authenticationActions.recoverAccountHandleFailure({
            error: new Error("Mnemonic words provided was not valid")
          })
        );
      }
    })
  );

export default combineEpics(loginEpic, recoverAccountHandleEpic);
