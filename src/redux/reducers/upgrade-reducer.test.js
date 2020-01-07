import upgrade from "./upgrade-reducer";
import upgradeActions from "../actions/upgrade-actions";
import { UPGRADE_PHASES } from "../../config";

const initState = {
  invoice: null,
  phase: UPGRADE_PHASES.POLL_PAYMENT
};

test("signup-reducer POLL_PAYMENT", () => {
  const invoice = { cost: 123, ethAddress: "0x0x" };
  const action = {
    type: upgradeActions.POLL_PAYMENT,
    payload: { invoice }
  };
  const expected = {
    ...initState,
    invoice,
    phase: UPGRADE_PHASES.SEND_PAYMENT
  };
  expect(upgrade(initState, action)).toEqual(expected);
});

test("signup-reducer ACCOUNT_PAID_SUCCESS", () => {
  const action = {
    type: upgradeActions.ACCOUNT_PAID_SUCCESS
  };
  const expected = {
    ...initState,
    phase: UPGRADE_PHASES.CONFIRM_PAYMENT
  };
  expect(upgrade(initState, action)).toEqual(expected);
});
