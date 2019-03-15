const GET_INVOICE_PENDING = "opacity/signup/get-invoice-pending";
const GET_INVOICE_SUCCESS = "opacity/signup/get-invoice-success";
const GET_INVOICE_FAILURE = "opacity/signup/get-invoice-failure";
const ACCOUNT_PAID_SUCCESS = "opacity/signup/account-paid-success";
const ACCOUNT_PAID_FAILURE = "opacity/signup/account-paid-failure";

const ACTIONS = Object.freeze({
  GET_INVOICE_PENDING,
  GET_INVOICE_SUCCESS,
  GET_INVOICE_FAILURE,
  ACCOUNT_PAID_SUCCESS,
  ACCOUNT_PAID_FAILURE,

  getInvoicePending: ({ privateKey, storagePin }) => ({
    type: GET_INVOICE_PENDING,
    payload: { privateKey, storagePin }
  }),
  getInvoiceSuccess: ({ accountId, invoice }) => ({
    type: GET_INVOICE_SUCCESS,
    payload: { accountId, invoice }
  }),
  getInvoiceFailure: ({ error }) => ({
    type: GET_INVOICE_FAILURE,
    payload: { error }
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
