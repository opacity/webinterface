import { from, of } from "rxjs";
import { switchMap, flatMap, catchError } from "rxjs/operators";

import { ofType, combineEpics } from "redux-observable";

import { push } from "react-router-redux";
import * as forge from "node-forge";

import authenticationActions from "../actions/authentication-actions";
import * as Backend from "../../services/backend";

const loginEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(authenticationActions.LOGIN_PENDING),
    switchMap(({ payload }) => {
      const { privateKey, storagePin } = payload;

      const m = forge.md.sha256.create();
      m.update(privateKey + storagePin);

      const metadataKey = m.digest().toHex();

      return from(
        Backend.login({
          metadataKey
        })
      ).pipe(
        flatMap(() => {
          return [
            authenticationActions.loginSuccess({ metadataKey }),
            push("/file-manager")
          ];
        }),
        catchError(error => of(authenticationActions.loginFailure({ error })))
      );
    })
  );

export default combineEpics(loginEpic);
