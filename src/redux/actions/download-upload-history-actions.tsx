const BEGIN_UPLOAD_HISTORY_DOWNLOAD = "opacity/upload_history/begin_download";
const DOWNLOAD_UPLOAD_HISTORY_SUCCESS =
  "opacity/upload_history/download_success";
const DOWNLOAD_UPLOAD_HISTORY_FAILURE =
  "opacity/upload_history/download_failure";

const ACTIONS = Object.freeze({
  // actions
  BEGIN_UPLOAD_HISTORY_DOWNLOAD,
  DOWNLOAD_UPLOAD_HISTORY_SUCCESS,
  DOWNLOAD_UPLOAD_HISTORY_FAILURE,

  // actionCreators
  beginDownloadUploadHistory: () => ({
    type: ACTIONS.BEGIN_UPLOAD_HISTORY_DOWNLOAD
  }),

  downloadUploadHistorySuccess: () => ({
    type: ACTIONS.DOWNLOAD_UPLOAD_HISTORY_SUCCESS
  }),

  downloadUploadHistoryFailure: () => ({
    type: ACTIONS.DOWNLOAD_UPLOAD_HISTORY_FAILURE
  })
});

export default ACTIONS;
