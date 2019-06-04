import { combineEpics } from "redux-observable";

import coinMarketCapEpic from "./coinmarketcap-epic";
import metamaskEpic from "./metamask-epic";
import signupEpic from "./signup-epic";
import filesEpic from "./files-epic";
import authenticationEpic from "./authentication-epic";
import uploadEpic from "./upload-epic";
import downloadEpic from "./download-epic";
import removeEpic from "./remove-epic";
import subscriptionEpic from "./subscription-epic";

export default combineEpics(
  coinMarketCapEpic,
  metamaskEpic,
  signupEpic,
  filesEpic,
  authenticationEpic,
  uploadEpic,
  downloadEpic,
  removeEpic,
  subscriptionEpic
);
