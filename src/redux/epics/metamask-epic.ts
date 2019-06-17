import { from as fromPromise, of } from "rxjs";
import { mergeMap, map, catchError, ignoreElements, tap } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import metamaskActions from "../actions/metamask-actions";
import MetamaskService from "../../services/metamask";

const METAMASK_URL = "https://metamask.io/";

const metamaskAccountEpic = action$ =>
  action$.pipe(
    ofType(metamaskActions.CREATE_TRANSACTION),
    mergeMap(({ payload }) => {
      const { cost, ethAddress, gasPrice } = payload;
      return fromPromise(MetamaskService.fetchDefaultMetamaskAccount()).pipe(
        map(account =>
          metamaskActions.paymentPending({
            to: ethAddress,
            from: account,
            cost,
            gasPrice
          })
        ),
        catchError(error => of(metamaskActions.accountError({ error })))
      );
    })
  );

const metamaskTransactionEpic = action$ =>
  action$.pipe(
    ofType(metamaskActions.PAYMENT_PENDING),
    mergeMap(({ payload }) => {
      const { from, to, cost, gasPrice } = payload;
      return fromPromise(MetamaskService.getTransactionNonce(from)).pipe(
        map(nonce => {
          return {
            to,
            from,
            cost,
            gasPrice,
            nonce
          };
        }),
        catchError(error => of(metamaskActions.paymentError({ error })))
      );
    }),
    mergeMap(({ cost, to, from, gasPrice, nonce }) => {
      return fromPromise(
        MetamaskService.sendTransaction({
          cost,
          to,
          from,
          gasPrice,
          nonce: nonce + 1
        })
      ).pipe(
        map(() => metamaskActions.paymentSuccess()),
        catchError(error => of(metamaskActions.paymentError({ error })))
      );
    })
  );

const metamaskAccountErrorEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(metamaskActions.ACCOUNT_ERROR),
    tap(() => {
      window.open(METAMASK_URL, " _blank");
    }),
    ignoreElements()
  );

export default combineEpics(
  metamaskAccountEpic,
  metamaskAccountErrorEpic,
  metamaskTransactionEpic
);
