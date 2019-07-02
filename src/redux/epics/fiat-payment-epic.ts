// import { from, of } from "rxjs";
// import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import fiatPaymentActions from "../actions/fiat-payment-actions";

const payFiatEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fiatPaymentActions.PAY_FIAT),
    switchMap(({ payload }) => {
      // const { token, masterHandle } = payload;

      // return of(fiatPaymentActions.payFiatFailure({ error: "Blah" }));
      return of(fiatPaymentActions.payFiatSuccess());

      // return from(waitForPaymentFn()).pipe(
      // map(invoice => signupActions.accountPaidSuccess()),
      // catchError(error => of(signupActions.accountPaidFailure({ error })))
      // );
    })
  );

export default combineEpics(payFiatEpic);
