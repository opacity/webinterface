import { combineEpics } from "redux-observable";

import coinMarketCapEpic from "./coinmarketcap-epic";
import metamaskEpic from "./metamask-epic";
import signupEpic from "./signup-epic";
import authenticationEpic from "./authentication-epic";
import uploadEpic from "./upload-epic";
import downloadEpic from "./download-epic";
import removeEpic from "./remove-epic";

export default combineEpics(
  coinMarketCapEpic,
  metamaskEpic,
  signupEpic,
  authenticationEpic,
  uploadEpic,
  downloadEpic,
  removeEpic
);
