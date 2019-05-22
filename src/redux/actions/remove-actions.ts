const REMOVE_FILE_BY_HANDLE = "opacity/remove/remove-file-by-handle";
const REMOVE_FILE_BY_NAME = "opacity/remove/remove-file-by-name";
const REMOVE_SUCCESS = "opacity/remove/remove-success";
const REMOVE_ERROR = "opacity/remove/remove-error";

const ACTIONS = Object.freeze({
  REMOVE_FILE_BY_HANDLE,
  REMOVE_FILE_BY_NAME,
  REMOVE_SUCCESS,
  REMOVE_ERROR,

  removeFileByHandle: ({ handle, masterHandle }) => ({
    type: REMOVE_FILE_BY_HANDLE,
    payload: { handle, masterHandle }
  }),
  removeFileByName: ({ name, masterHandle }) => ({
    type: REMOVE_FILE_BY_NAME,
    payload: { name, masterHandle }
  }),
  removeSuccess: ({ masterHandle }) => ({
    type: REMOVE_SUCCESS,
    payload: { masterHandle }
  }),
  removeError: ({ err }) => ({
    type: REMOVE_ERROR,
    payload: { err }
  })
});

export default ACTIONS;
