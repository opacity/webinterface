import { combineEpics } from "redux-observable";

import coinMarketCapEpic from "./coinmarketcap-epic";
import metamaskEpic from "./metamask-epic";
import signupEpic from "./signup-epic";
import upgradeEpic from "./upgrade-epic";
import finderEpic from "./finder-epic";
import fiatPaymentEpic from "./fiat-payment-epic";
import authenticationEpic from "./authentication-epic";
import fileEpic from "./file-epic";
import folderEpic from "./folder-epic";

export default combineEpics(
  coinMarketCapEpic,
  metamaskEpic,
  signupEpic,
  upgradeEpic,
  finderEpic,
  fiatPaymentEpic,
  authenticationEpic,
  fileEpic,
  folderEpic
);
