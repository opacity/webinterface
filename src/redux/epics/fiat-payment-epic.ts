import { from, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import fiatPaymentActions from "../actions/fiat-payment-actions";

import BackendService from "../../services/backend";

const payFiatEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fiatPaymentActions.PAY_FIAT),
    switchMap(({ payload }) => {
      const { stripeToken, masterHandle, timestamp } = payload;

      return from(
        BackendService.createSubscription({
          stripeToken,
          masterHandle,
          timestamp
        })
      ).pipe(
        map(() => fiatPaymentActions.payFiatSuccess()),
        catchError(error => of(fiatPaymentActions.payFiatFailure({ error })))
      );
    })
  );

export default combineEpics(payFiatEpic);
