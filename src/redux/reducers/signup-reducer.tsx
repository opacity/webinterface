import signupActions from "../actions/signup-actions";

const PAYMENT_STATUSES = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
};

const initState = {
  invoice: null, // { cost, ethAddress }
  paymentStatus: PAYMENT_STATUSES.PENDING
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case signupActions.GET_INVOICE_SUCCESS:
      const { invoice } = action.payload;
      return { ...state, invoice, paymentStatus: PAYMENT_STATUSES.PENDING };

    default:
      return state;
  }
};

export default signupReducer;
