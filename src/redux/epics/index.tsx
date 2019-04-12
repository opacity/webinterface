import { combineEpics } from "redux-observable";

import coinMarketCapEpic from "./coinmarketcap-epic";
import uploadEpic from "./upload-epic";
import downloadEpic from "./download-epic";
import downloadUploadHistoryEpic from "./download-upload-history-epic";
import metamaskEpic from "./metamask-epic";
import navigationEpic from "./navigation-epic";
import signupEpic from "./signup-epic";
import authenticationEpic from "./authentication-epic";

export default combineEpics(
  coinMarketCapEpic,
  uploadEpic,
  downloadEpic,
  downloadUploadHistoryEpic,
  metamaskEpic,
  navigationEpic,
  signupEpic,
  authenticationEpic
);
