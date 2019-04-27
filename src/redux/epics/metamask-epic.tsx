import { from as fromPromise, of } from "rxjs";
import { combineEpics } from "redux-observable";

import metamaskActions from "../actions/metamask-actions";
import Metamask from "../../services/metamask";

const METAMASK_URL = "https://metamask.io/";

const metamaskAccountEpic = action$ =>
  action$.ofType(metamaskActions.CREATE_TRANSACTION).mergeMap(action => {
    const { cost, ethAddress, gasPrice } = action.payload;
    return fromPromise(Metamask.fetchDefaultMetamaskAccount())
      .map(account =>
        metamaskActions.paymentPending({
          to: ethAddress,
          from: account,
          cost,
          gasPrice
        })
      )
      .catch(e => of(metamaskActions.accountError(e)));
  });

const metamaskTransactionEpic = action$ =>
  action$
    .ofType(metamaskActions.PAYMENT_PENDING)
    .mergeMap(action => {
      const { from, to, cost, gasPrice } = action.payload;

      return fromPromise(Metamask.getTransactionNonce(from))
        .map(nonce => {
          return {
            to,
            from,
            cost,
            gasPrice,
            nonce
          };
        })
        .catch(e => of(metamaskActions.paymentError(e)));
    })
    .mergeMap(transaction => {
      const { cost, to, from, gasPrice, nonce } = transaction;

      return fromPromise(
        Metamask.sendTransaction({
          cost,
          to,
          from,
          gasPrice,
          nonce: nonce + 1
        })
      )
        .map(() => metamaskActions.paymentSuccess())
        .catch(e => of(metamaskActions.paymentError(e)));
    });

const metamaskAccountErrorEpic = action$ =>
  action$
    .ofType(metamaskActions.ACCOUNT_ERROR)
    .do(() => {
      window.open(METAMASK_URL, " _blank");
    })
    .ignoreElements();

export default combineEpics(
  metamaskAccountEpic,
  metamaskAccountErrorEpic,
  metamaskTransactionEpic
);
