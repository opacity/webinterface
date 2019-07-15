const UPLOAD_FILES = "opacity/upload/upload-files";
const UPLOAD_FILE = "opacity/upload/upload-file";
const UPLOAD_SUCCESS = "opacity/upload/upload-success";
const UPLOAD_ERROR = "opacity/upload/upload-error";

const ACTIONS = Object.freeze({
  UPLOAD_FILES,
  UPLOAD_FILE,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,

  uploadFiles: ({ files, folder, masterHandle }) => ({
    type: UPLOAD_FILES,
    payload: { files, folder, masterHandle }
  }),
  uploadFile: ({ file, folder, masterHandle }) => ({
    type: UPLOAD_FILE,
    payload: { file, folder, masterHandle }
  }),
  uploadSuccess: ({ masterHandle, folder }) => ({
    type: UPLOAD_SUCCESS,
    payload: { masterHandle, folder }
  }),
  uploadError: ({ handle, filename, error }) => ({
    type: UPLOAD_ERROR,
    payload: { handle, filename, error }
  })
});

export default ACTIONS;
