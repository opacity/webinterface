import { from, of } from "rxjs";
import { switchMap, flatMap, catchError } from "rxjs/operators";

import { ofType, combineEpics } from "redux-observable";

import { push } from "react-router-redux";
import forge from "node-forge";

import authenticationActions from "../actions/authentication-actions";
import backend from "../../services/backend";

const loginEpic = action$ =>
  action$.pipe(
    ofType(authenticationActions.LOGIN_PENDING),
    switchMap(({ payload }) => {
      const { privateKey, storagePin } = payload;

      const md = forge.md.sha256.create();
      md.update(privateKey + storagePin);

      const metadataKey = md.digest().toHex();

      return from(
        backend.login({
          metadataKey
        })
      ).pipe(
        flatMap(invoice => [
          authenticationActions.loginSuccess({ metadataKey }),
          push("/file-manager")
        ]),
        catchError(error => of(authenticationActions.loginFailure({ error })))
      );
    })
  );

export default combineEpics(loginEpic);
