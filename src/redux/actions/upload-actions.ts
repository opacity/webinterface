const UPLOAD_FILES = "opacity/upload/upload-files";
const UPLOAD_FILE = "opacity/upload/upload-file";
const MONITOR_FILE = "opacity/upload/monitor-file";
const UPLOAD_PROGRESS = "opacity/upload/upload-progress";
const UPLOAD_SUCCESS = "opacity/upload/upload-success";
const UPLOAD_ERROR = "opacity/upload/upload-error";

const ACTIONS = Object.freeze({
  UPLOAD_FILES,
  UPLOAD_FILE,
  MONITOR_FILE,
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,

  uploadFiles: ({ files, accountId }) => ({
    type: UPLOAD_FILES,
    payload: { files, accountId }
  }),
  uploadFile: ({ file, accountId }) => ({
    type: UPLOAD_FILE,
    payload: { file, accountId }
  }),
  monitorFile: ({ handle }) => ({
    type: MONITOR_FILE,
    payload: { handle }
  }),
  uploadProgress: ({ handle, progress }) => ({
    type: UPLOAD_PROGRESS,
    payload: { handle, progress }
  }),
  uploadSuccess: ({ handle, filename, size, createdAt }) => ({
    type: UPLOAD_SUCCESS,
    payload: { handle, filename, size, createdAt }
  }),
  uploadError: ({ handle, error }) => ({
    type: UPLOAD_ERROR,
    payload: { error }
  })
});

export default ACTIONS;
