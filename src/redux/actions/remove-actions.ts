const REMOVE_FILE_BY_HANDLE = "opacity/remove/remove-file-by-handle";
const REMOVE_FILE_BY_NAME = "opacity/remove/remove-file-by-name";
const REMOVE_FILE_SUCCESS = "opacity/remove/remove-file-success";
const REMOVE_FILE_ERROR = "opacity/remove/remove-file-error";

const ACTIONS = Object.freeze({
  REMOVE_FILE_BY_HANDLE,
  REMOVE_FILE_BY_NAME,
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
  })
});

export default ACTIONS;
