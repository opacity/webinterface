const DOWNLOAD_FILE = "opacity/download/download-file";
const DOWNLOAD_PROGRESS = "opacity/download/download-progress";
const DOWNLOAD_SUCCESS = "opacity/download/download-success";
const DOWNLOAD_ERROR = "opacity/download/download-error";

const ACTIONS = Object.freeze({
  DOWNLOAD_FILE,
  DOWNLOAD_PROGRESS,
  DOWNLOAD_SUCCESS,
  DOWNLOAD_ERROR,

  downloadFile: ({ handle, filename }) => ({
    type: DOWNLOAD_FILE,
    payload: { handle, filename }
  }),
  downloadProgress: ({ progress }) => ({
    type: DOWNLOAD_PROGRESS,
    payload: { progress }
  }),
  downloadSuccess: ({ handle }) => ({
    type: DOWNLOAD_SUCCESS,
    payload: { handle }
  }),
  downloadError: ({ err }) => ({
    type: DOWNLOAD_ERROR,
    payload: { err }
  })
});

export default ACTIONS;
