const DOWNLOAD_FILE = "opacity/download/download-file";
const DOWNLOAD_SUCCESS = "opacity/download/download-success";
const DOWNLOAD_ERROR = "opacity/download/download-error";

const ACTIONS = Object.freeze({
  DOWNLOAD_FILE,
  DOWNLOAD_SUCCESS,
  DOWNLOAD_ERROR,

  downloadFile: ({ handle }) => ({
    type: DOWNLOAD_FILE,
    payload: { handle }
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
