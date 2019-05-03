import { combineEpics } from "redux-observable";

import coinMarketCapEpic from "./coinmarketcap-epic";
import metamaskEpic from "./metamask-epic";
import signupEpic from "./signup-epic";
import authenticationEpic from "./authentication-epic";

export default combineEpics(
  coinMarketCapEpic,
  metamaskEpic,
  signupEpic,
  authenticationEpic
);
