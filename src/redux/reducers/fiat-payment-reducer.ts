import fiatPaymentActions from "../actions/fiat-payment-actions";
import { FIAT_PAYMENT_STATUSES } from "../../config";

const initState = {
  status: FIAT_PAYMENT_STATUSES.IDLE,
  error: null
};

const fiatPaymentReducer = (state = initState, action) => {
  switch (action.type) {
    case fiatPaymentActions.PAY_FIAT:
      return { ...state, status: FIAT_PAYMENT_STATUSES.PENDING, error: null };
    case fiatPaymentActions.PAY_FIAT_SUCCESS:
      return { ...state, status: FIAT_PAYMENT_STATUSES.SUCCESS, error: null };
    case fiatPaymentActions.PAY_FIAT_FAILURE:
      return {
        ...state,
        status: FIAT_PAYMENT_STATUSES.ERROR,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default fiatPaymentReducer;
