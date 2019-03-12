const GET_INVOICE_PENDING = "opacity/signup/get-invoice-pending";
const GET_INVOICE_SUCCESS = "opacity/signup/get-invoice-success";
const GET_INVOICE_FAILURE = "opacity/signup/get-invoice-failure";

const ACTIONS = Object.freeze({
  GET_INVOICE_PENDING,
  GET_INVOICE_SUCCESS,
  GET_INVOICE_FAILURE,

  getInvoicePending: ({ privateKey, storagePin }) => ({
    type: GET_INVOICE_PENDING,
    payload: { privateKey, storagePin }
  }),
  getInvoiceSuccess: ({ invoice }) => ({
    type: GET_INVOICE_SUCCESS,
    payload: { invoice }
  }),
  getInvoiceFailure: ({ error }) => ({
    type: GET_INVOICE_FAILURE,
    payload: { error }
  })
});

export default ACTIONS;
