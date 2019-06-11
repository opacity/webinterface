import { map } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";
import { push } from "connected-react-router";

import subscriptionActions from "../actions/subscription-actions";

const setSubscriptionEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(subscriptionActions.SET_SUBSCRIPTION),
    map(() => push("/sign-up"))
  );

export default combineEpics(setSubscriptionEpic);
