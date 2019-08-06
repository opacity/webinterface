const REMOVE_FILE_BY_VERSION = "opacity/remove/remove-file-by-version";
const REMOVE_FILE_BY_NAME = "opacity/remove/remove-file-by-name";
const REMOVE_FILE_SUCCESS = "opacity/remove/remove-file-success";
const REMOVE_FILE_ERROR = "opacity/remove/remove-file-error";
const REMOVE_FILES = "opacity/remove/remove-files";

const ACTIONS = Object.freeze({
  REMOVE_FILE_BY_VERSION,
  REMOVE_FILE_BY_NAME,
  REMOVE_FILE_SUCCESS,
  REMOVE_FILE_ERROR,
  REMOVE_FILES,

  removeFileByVersion: ({ name, version, folder, masterHandle }) => ({
    type: REMOVE_FILE_BY_VERSION,
    payload: { name, version, folder, masterHandle }
  }),
  removeFileSuccess: ({ masterHandle, folder, version }) => ({
    type: REMOVE_FILE_SUCCESS,
    payload: { masterHandle, folder, version }
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
