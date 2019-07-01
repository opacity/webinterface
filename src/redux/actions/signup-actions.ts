const SHOW_MNEMONIC = "opacity/signup/show-mnemonic";
const SHOW_ADDRESS = "opacity/signup/show-address";
const POLL_PAYMENT = "opacity/signup/poll-payment";
const ACCOUNT_PAID_SUCCESS = "opacity/signup/account-paid-success";
const ACCOUNT_PAID_FAILURE = "opacity/signup/account-paid-failure";

const ACTIONS = Object.freeze({
  SHOW_MNEMONIC,
  SHOW_ADDRESS,
  POLL_PAYMENT,
  ACCOUNT_PAID_SUCCESS,
  ACCOUNT_PAID_FAILURE,

  showMnemonic: () => ({
    type: SHOW_MNEMONIC
  }),
  showAddress: () => ({
    type: SHOW_ADDRESS
  }),
  pollPayment: ({ waitForPaymentFn }) => ({
    type: POLL_PAYMENT,
    payload: { waitForPaymentFn }
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
