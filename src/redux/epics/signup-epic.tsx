import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import forge from "node-forge";

import signupActions from "../actions/signup-actions";
import backend from "../../services/backend";

const createAccountEpic = action$ =>
  action$.ofType(signupActions.GET_INVOICE_PENDING).switchMap(action => {
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
      .map(invoice => signupActions.getInvoiceSuccess({ accountId, invoice }))
      .catch(error =>
        Observable.of(signupActions.getInvoiceFailure({ error }))
      );
  });

const pollPaymentEpic = action$ =>
  action$.ofType(signupActions.GET_INVOICE_SUCCESS).switchMap(action => {
    const { accountId } = action.payload;

    const INITIAL_DELAY_MS = 5000;
    const PERIODIC_DELAY_MS = 5000;

    return Observable.timer(INITIAL_DELAY_MS, PERIODIC_DELAY_MS)
      .takeUntil(action$.ofType(signupActions.ACCOUNT_PAID_SUCCESS))
      .mergeMap(() =>
        Observable.fromPromise(
          backend.checkAccountPayment({
            accountId
          })
        )
          .filter(paid => paid)
          .map(invoice => signupActions.accountPaidSuccess())
          .catch(error =>
            Observable.of(signupActions.accountPaidFailure({ error }))
          )
      );
  });

export default combineEpics(createAccountEpic, pollPaymentEpic);
