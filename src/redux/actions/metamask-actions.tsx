const CREATE_TRANSACTION = "opacity/metamask/create-transaction";
const ACCOUNT_ERROR = "opacity/metamask/account-error";
const PAYMENT_PENDING = "opacity/metamask/payment-pending";
const PAYMENT_SUCCESS = "opacity/metamask/payment-success";
const PAYMENT_ERROR = "opacity/metamask/payment-error";

const ACTIONS = Object.freeze({
  // actions
  CREATE_TRANSACTION,
  ACCOUNT_ERROR,
  PAYMENT_PENDING,
  PAYMENT_SUCCESS,
  PAYMENT_ERROR,

  createTransaction: ({ cost, ethAddress, gasPrice }) => ({
    type: ACTIONS.CREATE_TRANSACTION,
    payload: { cost, ethAddress, gasPrice }
  }),
  paymentPending: ({ to, from, cost, gasPrice }) => ({
    type: ACTIONS.PAYMENT_PENDING,
    payload: { to, from, cost, gasPrice }
  }),
  accountError: ({ error }) => ({
    type: ACTIONS.ACCOUNT_ERROR,
    payload: { error }
  }),
  paymentSuccess: () => ({
    type: ACTIONS.PAYMENT_SUCCESS
  }),
  paymentError: ({ error }) => ({
    type: ACTIONS.PAYMENT_ERROR,
    payload: { error }
  })
});

export default ACTIONS;
