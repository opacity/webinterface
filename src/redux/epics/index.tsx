import { combineEpics } from "redux-observable";

import uploadEpic from "./upload-epic";
import downloadEpic from "./download-epic";
import downloadUploadHistoryEpic from "./download-upload-history-epic";
import metamaskEpic from "./metamask-epic";
import navigationEpic from "./navigation-epic";
import signupEpic from "./signup-epic";

export default combineEpics(
  uploadEpic,
  downloadEpic,
  downloadUploadHistoryEpic,
  metamaskEpic,
  navigationEpic,
  signupEpic
);
