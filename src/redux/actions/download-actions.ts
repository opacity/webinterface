const DOWNLOAD = "opacity/download/stream";
const DOWNLOAD_PROGRESS = "opacity/download/stream-download-progress";
const DOWNLOAD_SUCCESS = "opacity/download/stream-download-success";
const DOWNLOAD_ERROR = "opacity/download/stream-download-error";

const ACTIONS = Object.freeze({
  DOWNLOAD,
  DOWNLOAD_PROGRESS,
  DOWNLOAD_SUCCESS,
  DOWNLOAD_ERROR,

  streamDownload: ({ handle }) => ({
    type: DOWNLOAD,
    payload: { handle }
  }),
  streamDownloadProgress: ({ progress }) => ({
    type: DOWNLOAD_PROGRESS,
    payload: { progress }
  }),
  streamDownloadSuccess: ({ handle }) => ({
    type: DOWNLOAD_SUCCESS,
    payload: { handle }
  }),
  streamDownloadError: ({ err }) => ({
    type: DOWNLOAD_ERROR,
    payload: { err }
  })
});

export default ACTIONS;
