const UPLOAD_FILES = "opacity/upload/upload-files";
const UPLOAD_FILE = "opacity/upload/upload-file";
const UPLOAD_SUCCESS = "opacity/upload/upload-success";
const UPLOAD_ERROR = "opacity/upload/upload-error";

const ACTIONS = Object.freeze({
  UPLOAD_FILES,
  UPLOAD_FILE,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,

  uploadFiles: ({ files, directory, masterHandle }) => ({
    type: UPLOAD_FILES,
    payload: { files, directory, masterHandle }
  }),
  uploadFile: ({ file, directory, masterHandle }) => ({
    type: UPLOAD_FILE,
    payload: { file, directory, masterHandle }
  }),
  uploadSuccess: ({ masterHandle, directory }) => ({
    type: UPLOAD_SUCCESS,
    payload: { masterHandle, directory }
  }),
  uploadError: ({ handle, filename, error }) => ({
    type: UPLOAD_ERROR,
    payload: { handle, filename, error }
  })
});

export default ACTIONS;
