import signupActions from "../actions/signup-actions";
import { SIGNUP_PHASES } from "../../config";

const initState = {
  invoice: null, // { cost, ethAddress }
  privateKey: null,
  phase: SIGNUP_PHASES.RECORD_RECOVERY_PHRASE
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case signupActions.SET_PRIVATE_KEY:
      const { privateKey } = action.payload;
      return { ...state, phase: SIGNUP_PHASES.RECORD_STORAGE_PIN, privateKey };
    case signupActions.POLL_PAYMENT:
      const { invoice } = action.payload;
      return { ...state, phase: SIGNUP_PHASES.SEND_PAYMENT, invoice };
    case signupActions.ACCOUNT_PAID_SUCCESS:
      return { ...state, phase: SIGNUP_PHASES.CONFIRM_PAYMENT };

    default:
      return state;
  }
};

export default signupReducer;
