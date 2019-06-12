const SET_SUBSCRIPTION = "opacity/subscription/set-subscription";

const ACTIONS = Object.freeze({
  SET_SUBSCRIPTION,

  setSubscription: ({ item }) => ({
    type: SET_SUBSCRIPTION,
    payload: { item }
  })
});

export default ACTIONS;
