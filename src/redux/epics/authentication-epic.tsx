import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import forge from "node-forge";

import authenticationActions from "../actions/authentication-actions";
import backend from "../../services/backend";

const loginEpic = action$ =>
  action$.ofType(authenticationActions.LOGIN_PENDING).switchMap(action => {
    const { privateKey, storagePin } = action.payload;

    const md = forge.md.sha256.create();
    md.update(privateKey + storagePin);

    const metadataKey = md.digest().toHex();

    return Observable.fromPromise(
      backend.login({
        metadataKey
      })
    )
      .map(invoice => authenticationActions.loginSuccess({ metadataKey }))
      .catch(error =>
        Observable.of(authenticationActions.loginFailure({ error }))
      );
  });

export default combineEpics(loginEpic);
