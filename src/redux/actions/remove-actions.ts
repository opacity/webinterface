const REMOVE_FILE_BY_HANDLE = "opacity/remove/remove-file-by-handle";
const REMOVE_FILE_BY_NAME = "opacity/remove/remove-file-by-name";
const REMOVE_SUCCESS = "opacity/remove/remove-success";
const REMOVE_ERROR = "opacity/remove/remove-error";
const REMOVE_FILES = "opacity/remove/remove-files";
const REMOVE_FILE_SUCCESS = "opacity/remove/remove-file-success";
const REMOVE_FILE_ERROR = "opacity/remove/remove-file-error";

const ACTIONS = Object.freeze({
  REMOVE_FILE_BY_HANDLE,
  REMOVE_FILE_BY_NAME,
  REMOVE_SUCCESS,
  REMOVE_ERROR,
  REMOVE_FILES,
  REMOVE_FILE_SUCCESS,
  REMOVE_FILE_ERROR,

  removeFileByHandle: ({ name, handle, folder, masterHandle }) => ({
    type: REMOVE_FILE_BY_HANDLE,
    payload: { name, handle, folder, masterHandle }
  }),
  removeFileByName: ({ name, handle, folder, masterHandle }) => ({
    type: REMOVE_FILE_BY_NAME,
    payload: { name, handle, folder, masterHandle }
  }),
  removeFileSuccess: ({ masterHandle, folder }) => ({
    type: REMOVE_FILE_SUCCESS,
    payload: { masterHandle, folder }
  }),
  removeFileError: ({ error }) => ({
    type: REMOVE_FILE_ERROR,
    payload: { error }
  }),
  removeFiles: ({ files, masterHandle }) => ({
    type: REMOVE_FILES,
    payload: { files, masterHandle } // files = [{ handle, name }]
  })
});

export default ACTIONS;
