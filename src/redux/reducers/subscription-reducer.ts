import subscriptionActions from "../actions/subscription-actions";
import { SUBSCRIPTION_LIST } from "../../config";

const initState = {
  item: SUBSCRIPTION_LIST[0]
};

const subscriptionReducer = (state = initState, action) => {
  switch (action.type) {
    case subscriptionActions.SET_SUBSCRIPTION:
      const { item } = action.payload;
      return { ...state, item: item.item };
    default:
      return state;
  }
};

export default subscriptionReducer;
