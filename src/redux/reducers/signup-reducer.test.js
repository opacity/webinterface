import signup from "./signup-reducer";
import signupActions from "../actions/signup-actions";
import { SIGNUP_PHASES } from "../../config";

const initState = {
  invoice: null,
  phase: SIGNUP_PHASES.RECORD_RECOVERY_PHRASE
};

test("signup-reducer SHOW_ADDRESS", () => {
  const action = {
    type: signupActions.SHOW_ADDRESS
  };
  const expected = {
    ...initState,
    phase: SIGNUP_PHASES.RECORD_STORAGE_PIN
  };
  expect(signup(initState, action)).toEqual(expected);
});

test("signup-reducer POLL_PAYMENT", () => {
  const invoice = { cost: 123, ethAddress: "0x0x" };
  const action = {
    type: signupActions.POLL_PAYMENT,
    payload: { invoice }
  };
  const expected = {
    ...initState,
    invoice,
    phase: SIGNUP_PHASES.SEND_PAYMENT
  };
  expect(signup(initState, action)).toEqual(expected);
});

test("signup-reducer ACCOUNT_PAID_SUCCESS", () => {
  const action = {
    type: signupActions.ACCOUNT_PAID_SUCCESS
  };
  const expected = {
    ...initState,
    phase: SIGNUP_PHASES.CONFIRM_PAYMENT
  };
  expect(signup(initState, action)).toEqual(expected);
});

test("signup-reducer GO_BACK", () => {
  const action = {
    type: signupActions.GO_BACK
  };
  const expected = {
    ...initState,
    phase: SIGNUP_PHASES.RECORD_RECOVERY_PHRASE
  };
  expect(signup(initState, action)).toEqual(expected);
});
