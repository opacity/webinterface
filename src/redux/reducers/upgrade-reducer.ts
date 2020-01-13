import upgradeActions from "../actions/upgrade-actions";
import { UPGRADE_PHASES } from "../../config";

const initState = {
  invoice: null, // { cost, ethAddress }
  phase: UPGRADE_PHASES.SELECT_PLAN
};

const upgradeReducer = (state = initState, action) => {
  switch (action.type) {
    case upgradeActions.POLL_PAYMENT:
      const { invoice } = action.payload;
      return { ...state, phase: UPGRADE_PHASES.SEND_UPGRADE_PAYMENT, invoice };
    case upgradeActions.ACCOUNT_PAID_SUCCESS:
      return { ...state, phase: UPGRADE_PHASES.CONFIRM_PAYMENT };

    default:
      return state;
  }
};

export default upgradeReducer;
