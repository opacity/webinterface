const POLL_PAYMENT = "opacity/upgrade/poll-payment";
const ACCOUNT_PAID_SUCCESS = "opacity/upgrade/account-paid-success";
const ACCOUNT_PAID_FAILURE = "opacity/upgrade/account-paid-failure";

const ACTIONS = Object.freeze({
  POLL_PAYMENT,
  ACCOUNT_PAID_SUCCESS,
  ACCOUNT_PAID_FAILURE,

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
