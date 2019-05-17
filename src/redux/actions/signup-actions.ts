const SET_PRIVATE_KEY = "opacity/signup/set-private-key";
const POLL_PAYMENT = "opacity/signup/poll-payment";
const ACCOUNT_PAID_SUCCESS = "opacity/signup/account-paid-success";
const ACCOUNT_PAID_FAILURE = "opacity/signup/account-paid-failure";

const ACTIONS = Object.freeze({
  SET_PRIVATE_KEY,
  POLL_PAYMENT,
  ACCOUNT_PAID_SUCCESS,
  ACCOUNT_PAID_FAILURE,

  setPrivateKey: ({ privateKey }) => ({
    type: SET_PRIVATE_KEY,
    payload: { privateKey }
  }),
  pollPayment: ({ masterHandle }) => ({
    type: POLL_PAYMENT,
    payload: { masterHandle }
  }),
  accountPaidSuccess: () => ({
    type: ACCOUNT_PAID_SUCCESS
  }),
  accountPaidFailure: ({ error }) => ({
    type: ACCOUNT_PAID_FAILURE,
    payload: { error }
  })
});

export default ACTIONS;
