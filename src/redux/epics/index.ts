import { combineEpics } from "redux-observable";

import coinMarketCapEpic from "./coinmarketcap-epic";
import metamaskEpic from "./metamask-epic";
import signupEpic from "./signup-epic";
import finderEpic from "./finder-epic";
import fiatPaymentEpic from "./fiat-payment-epic";
import authenticationEpic from "./authentication-epic";
import uploadEpic from "./upload-epic";
import downloadEpic from "./download-epic";
import removeEpic from "./remove-epic";
import folderEpic from "./folder-epic";

export default combineEpics(
  coinMarketCapEpic,
  metamaskEpic,
  signupEpic,
  finderEpic,
  fiatPaymentEpic,
  authenticationEpic,
  uploadEpic,
  downloadEpic,
  removeEpic,
  folderEpic
);
