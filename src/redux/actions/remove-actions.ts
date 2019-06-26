const REMOVE_FILE_BY_HANDLE = "opacity/remove/remove-file-by-handle";
const REMOVE_FILE_BY_NAME = "opacity/remove/remove-file-by-name";
const REMOVE_SUCCESS = "opacity/remove/remove-success";
const REMOVE_ERROR = "opacity/remove/remove-error";
const REMOVE_FILES = "opacity/remove/remove-files";

const ACTIONS = Object.freeze({
  REMOVE_FILE_BY_HANDLE,
  REMOVE_FILE_BY_NAME,
  REMOVE_SUCCESS,
  REMOVE_ERROR,
  REMOVE_FILES,

  removeFileByHandle: ({ name, handle, masterHandle }) => ({
    type: REMOVE_FILE_BY_HANDLE,
    payload: { name, handle, masterHandle }
  }),
  removeFileByName: ({ name, handle, masterHandle }) => ({
    type: REMOVE_FILE_BY_NAME,
    payload: { name, handle, masterHandle }
  }),
  removeSuccess: ({ masterHandle }) => ({
    type: REMOVE_SUCCESS,
    payload: { masterHandle }
  }),
  removeError: ({ error }) => ({
    type: REMOVE_ERROR,
    payload: { error }
  }),
  removeFiles: ({ files, masterHandle }) => ({
    type: REMOVE_FILES,
    payload: { files, masterHandle }
  })
});

export default ACTIONS;
