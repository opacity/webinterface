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
import forge from "node-forge";

import signupActions from "../actions/signup-actions";
import backend from "../../services/backend";

const createAccountEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(signupActions.GET_INVOICE_PENDING),
    switchMap(({ payload }) => {
      const { privateKey, storagePin } = payload;

      const md = forge.md.sha256.create();
      md.update(privateKey + storagePin);

      const accountId = md.digest().toHex();
      const storageLimit = 100;
      const durationInMonths = 12;
      const metadataKey = md.digest().toHex();

      return from(
        backend.createAccount({
          accountId,
          storageLimit,
          durationInMonths,
          metadataKey
        })
      ).pipe(
        map(invoice => signupActions.getInvoiceSuccess({ accountId, invoice })),
        catchError(error => of(signupActions.getInvoiceFailure({ error })))
      );
    })
  );

const pollPaymentEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(signupActions.GET_INVOICE_SUCCESS),
    switchMap(({ payload }) => {
      const { accountId } = payload;

      const INITIAL_DELAY_MS = 5000;
      const PERIODIC_DELAY_MS = 5000;

      return timer(INITIAL_DELAY_MS, PERIODIC_DELAY_MS).pipe(
        takeUntil(action$.ofType(signupActions.ACCOUNT_PAID_SUCCESS)),
        mergeMap(() =>
          from(
            backend.isAccountPaid({
              accountId
            })
          ).pipe(
            filter(isPaid => isPaid),
            map(invoice => signupActions.accountPaidSuccess()),
            catchError(error => of(signupActions.accountPaidFailure({ error })))
          )
        )
      );
    })
  );

export default combineEpics(createAccountEpic, pollPaymentEpic);
