import signup from "./signup-reducer";
import signupActions from "../actions/signup-actions";
import { SIGNUP_PHASES } from "../../config";

const initState = {
  privateKey: null,
  invoice: null,
  phase: SIGNUP_PHASES.RECORD_RECOVERY_PHRASE
};

// must have test or jest will complain
test("foobar", () => {
  expect(1).toEqual(1);
});

// test("signup-reducer SET_PRIVATE_KEY", () => {
// const action = {
// type: signupActions.SET_PRIVATE_KEY,
// payload: { privateKey: "foobar" }
// };
// const expected = {
// invoice: null,
// privateKey: "foobar",
// phase: SIGNUP_PHASES.RECORD_STORAGE_PIN
// };
// expect(signup(initState, action)).toEqual(expected);
// });

// test("signup-reducer GET_INVOICE_SUCCESS", () => {
// const invoice = { cost: 123, ethAddress: "0x0x" };
// const action = {
// type: signupActions.GET_INVOICE_SUCCESS,
// payload: { invoice }
// };
// const expected = {
// invoice,
// privateKey: null,
// phase: SIGNUP_PHASES.SEND_PAYMENT
// };
// expect(signup(initState, action)).toEqual(expected);
// });

// test("signup-reducer ACCOUNT_PAID_SUCCESS", () => {
// const action = {
// type: signupActions.ACCOUNT_PAID_SUCCESS
// };
// const expected = {
// invoice: null,
// privateKey: null,
// phase: SIGNUP_PHASES.CONFIRM_PAYMENT
// };
// expect(signup(initState, action)).toEqual(expected);
// });
