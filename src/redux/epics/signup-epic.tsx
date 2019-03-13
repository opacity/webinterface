import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import forge from "node-forge";

import signupActions from "../actions/signup-actions";
import backend from "../../services/backend";

const createAccountEpic = action$ =>
  action$.ofType(signupActions.GET_INVOICE_PENDING).mergeMap(action => {
    const { privateKey, storagePin } = action.payload;

    const md = forge.md.sha256.create();
    md.update(privateKey + storagePin);

    const accountId = md.digest().toHex();
    const storageLimit = 100;
    const durationInMonths = 12;
    const metadataKey = md.digest().toHex();

    return Observable.fromPromise(
      backend.createAccount({
        accountId,
        storageLimit,
        durationInMonths,
        metadataKey
      })
    )
      .map(invoice => signupActions.getInvoiceSuccess({ invoice }))
      .catch(error =>
        Observable.of(signupActions.getInvoiceFailure({ error }))
      );
  });

export default combineEpics(createAccountEpic);
