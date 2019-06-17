import { ActionsObservable } from "redux-observable";
import { push } from "connected-react-router";
import { MasterHandle } from "opaque";

import subscriptionActions from "../actions/subscription-actions";
import subscriptionEpic from "./subscription-epic";

test("setSubscriptionEpic", () => {
  const action$ = ActionsObservable.of({
    type: subscriptionActions.SET_SUBSCRIPTION
  });

  subscriptionEpic(action$).subscribe(actions => {
    expect(actions).toEqual(push("/sign-up"));
  });
});
