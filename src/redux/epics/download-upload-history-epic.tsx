import { combineEpics } from "redux-observable";
import FileSaver from "file-saver";

import downloadUploadHistoryActions from "../actions/download-upload-history-actions";

const beginDownloadUploadHistory = (action$, store) => {
  return action$
    .ofType(downloadUploadHistoryActions.BEGIN_UPLOAD_HISTORY_DOWNLOAD)
    .filter(() => {
      const {
        upload: { history }
      } = store.getState();
      return !!history.length;
    })
    .map(() => {
      const {
        upload: { history }
      } = store.getState();
      const items = history.map(e => e);
      const json = JSON.stringify(items);
      let blob = new Blob([json], { type: "application/json" });
      // tslint:disable-next-line
      if (FileSaver !== undefined) {
        FileSaver.saveAs(blob, "handle.json");
      }
      return downloadUploadHistoryActions.downloadUploadHistorySuccess();
    });
};

export default combineEpics(beginDownloadUploadHistory);
