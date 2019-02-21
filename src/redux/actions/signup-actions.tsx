const SET_PRIVATE_KEY = "opacity/signup/set-private-key";

const ACTIONS = Object.freeze({
  SET_PRIVATE_KEY,

  setPrivateKey: ({ privateKey }) => ({
    type: SET_PRIVATE_KEY,
    payload: { privateKey }
  })
});

export default ACTIONS;
