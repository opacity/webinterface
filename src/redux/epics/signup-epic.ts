import { from, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import signupActions from "../actions/signup-actions";

const pollPaymentEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(signupActions.POLL_PAYMENT),
    switchMap(({ payload }) => {
      const { waitForPaymentFn } = payload;

      return from(waitForPaymentFn).pipe(
        map(invoice => signupActions.accountPaidSuccess()),
        catchError(error => of(signupActions.accountPaidFailure({ error })))
      );
    })
  );

export default combineEpics(pollPaymentEpic);
