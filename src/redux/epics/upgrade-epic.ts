import { from, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import upgradeActions from "../actions/upgrade-actions";

const pollPaymentEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(upgradeActions.POLL_PAYMENT),
    switchMap(({ payload }) => {
      const { waitForPaymentFn } = payload;

      return from(waitForPaymentFn()).pipe(
        map(invoice => upgradeActions.accountPaidSuccess()),
        catchError(error => of(upgradeActions.accountPaidFailure({ error })))
      );
    })
  );

export default combineEpics(pollPaymentEpic);
