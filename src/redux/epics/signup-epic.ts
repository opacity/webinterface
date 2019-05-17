import { from, of, timer } from "rxjs";
import {
  map,
  switchMap,
  catchError,
  takeUntil,
  mergeMap,
  filter
} from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import signupActions from "../actions/signup-actions";

// const createAccountEpic = (action$, state$, dependencies$) =>
// action$.pipe(
// ofType(signupActions.GET_INVOICE_PENDING),
// switchMap(({ payload }) => {
// const { masterHandle } = payload;

// const md = forge.md.sha256.create();
// md.update(privateKey + storagePin);

// const accountId = Account.getAccountId({ privateKey, storagePin });
// const metadataKey = Account.getMetadataKey({ privateKey, storagePin });
// const storageLimit = 100;
// const durationInMonths = 12;

// return from(
// backend.createAccount({
// accountId,
// storageLimit,
// durationInMonths,
// metadataKey
// })
// ).pipe(
// map(invoice => signupActions.getInvoiceSuccess({ accountId, invoice })),
// catchError(error => of(signupActions.getInvoiceFailure({ error })))
// );
// })
// );

const pollPaymentEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(signupActions.POLL_PAYMENT),
    switchMap(({ payload }) => {
      const { masterHandle } = payload;

      const INITIAL_DELAY_MS = 5000;
      const PERIODIC_DELAY_MS = 5000;

      return timer(INITIAL_DELAY_MS, PERIODIC_DELAY_MS).pipe(
        takeUntil(action$.ofType(signupActions.ACCOUNT_PAID_SUCCESS)),
        mergeMap(() =>
          from(masterHandle.isPaid()).pipe(
            filter(isPaid => !!isPaid),
            map(invoice => signupActions.accountPaidSuccess()),
            catchError(error => of(signupActions.accountPaidFailure({ error })))
          )
        )
      );
    })
  );

export default combineEpics(pollPaymentEpic);
