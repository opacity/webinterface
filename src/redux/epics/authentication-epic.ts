import { from, of } from "rxjs";
import { switchMap, flatMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";
import { push } from "connected-react-router";

// import { Account as A, MasterHandle } from "opaque";
// console.log("a: ", A);
// console.log("m: ", MasterHandle);

import authenticationActions from "../actions/authentication-actions";
import * as Backend from "../../services/backend";
import * as Account from "../../services/account";

const loginEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(authenticationActions.LOGIN_PENDING),
    switchMap(({ payload }) => {
      const { privateKey, storagePin } = payload;

      const metadataKey = Account.getMetadataKey({ privateKey, storagePin });

      return from(
        Backend.login({
          metadataKey
        })
      ).pipe(
        flatMap(({ metadata }) => {
          const accountId = Account.getAccountId({ privateKey, storagePin });
          return [
            authenticationActions.loginSuccess({
              accountId,
              metadata,
              metadataKey
              // masterHandle
            }),
            push("/file-manager")
          ];
        }),
        catchError(error => of(authenticationActions.loginFailure({ error })))
      );
    })
  );

export default combineEpics(loginEpic);
