import subscription from "./subscription-reducer";
import subscriptionActions from "../actions/subscription-actions";
import { SUBSCRIPTION_LIST } from "../../config";

const initState = {
  item: SUBSCRIPTION_LIST[0]
};

test("subscription-reducer SET_SUBSCRIPTION", () => {
  const action = {
    type: subscriptionActions.SET_SUBSCRIPTION,
    payload: {
      item: SUBSCRIPTION_LIST[1]
    }
  };
  const expected = {
    ...initState,
    item: SUBSCRIPTION_LIST[1]
  };
  expect(subscription(initState, action)).toEqual(expected);
});
