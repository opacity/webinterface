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

  uploadFiles: ({ files, masterHandle }) => ({
    type: UPLOAD_FILES,
    payload: { files, masterHandle }
  }),
  uploadFile: ({ file, masterHandle }) => ({
    type: UPLOAD_FILE,
    payload: { file, masterHandle }
  }),
  monitorFile: ({ handle }) => ({
    type: MONITOR_FILE,
    payload: { handle }
  }),
  uploadProgress: ({ handle, progress }) => ({
    type: UPLOAD_PROGRESS,
    payload: { handle, progress }
  }),
  uploadSuccess: ({ masterHandle }) => ({
    type: UPLOAD_SUCCESS,
    payload: { masterHandle }
  }),
  uploadError: ({ handle, error }) => ({
    type: UPLOAD_ERROR,
    payload: { error }
  })
});

export default ACTIONS;
