const REMOVE_FILE_BY_HANDLE = "opacity/remove/remove-file-by-handle";
const REMOVE_FILE_BY_NAME = "opacity/remove/remove-file-by-name";
const REMOVE_FILE_SUCCESS = "opacity/remove/remove-file-success";
const REMOVE_FILE_ERROR = "opacity/remove/remove-file-error";
const REMOVE_FILES = "opacity/remove/remove-files";

const ACTIONS = Object.freeze({
  REMOVE_FILE_BY_HANDLE,
  REMOVE_FILE_BY_NAME,
  REMOVE_FILE_SUCCESS,
  REMOVE_FILE_ERROR,
  REMOVE_FILES,

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
  removeFiles: ({ files, masterHandle, folder }) => ({
    type: REMOVE_FILES,
    payload: { files, masterHandle, folder } // files = [{ handle, name }]
  })
});

export default ACTIONS;
