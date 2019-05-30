const UPLOAD_FILES = "opacity/upload/upload-files";
const UPLOAD_FILE = "opacity/upload/upload-file";
const UPLOAD_SUCCESS = "opacity/upload/upload-success";
const UPLOAD_ERROR = "opacity/upload/upload-error";

const ACTIONS = Object.freeze({
  UPLOAD_FILES,
  UPLOAD_FILE,
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
