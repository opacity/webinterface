const RENAME_FILE = "opacity/file/rename-file";
const RENAME_FILE_SUCCESS = "opacity/file/rename-file-success";
const RENAME_FILE_FAILURE = "opacity/file/rename-file-failure";
const MOVE_FILE = "opacity/file/move-file";
const MOVE_FILE_SUCCESS = "opacity/file/move-file-success";
const MOVE_FILE_FAILURE = "opacity/file/move-file-failure";
const REMOVE_FILE_BY_VERSION = "opacity/remove/remove-file-by-version";
const REMOVE_FILE_BY_NAME = "opacity/remove/remove-file-by-name";
const REMOVE_FILE_SUCCESS = "opacity/remove/remove-file-success";
const REMOVE_FILE_ERROR = "opacity/remove/remove-file-error";
const REMOVE_FILES = "opacity/remove/remove-files";

const ACTIONS = Object.freeze({
  RENAME_FILE,
  RENAME_FILE_SUCCESS,
  RENAME_FILE_FAILURE,
  MOVE_FILE,
  MOVE_FILE_SUCCESS,
  MOVE_FILE_FAILURE,
  REMOVE_FILE_BY_VERSION,
  REMOVE_FILE_BY_NAME,
  REMOVE_FILE_SUCCESS,
  REMOVE_FILE_ERROR,
  REMOVE_FILES,

  renameFile: ({ name, file, folder, masterHandle }) => ({
    type: RENAME_FILE,
    payload: { name, file, folder, masterHandle }
  }),
  renameFileSuccess: ({ masterHandle, folder }) => ({
    type: RENAME_FILE_SUCCESS,
    payload: { masterHandle, folder }
  }),
  renameFileFailure: ({ error }) => ({
    type: RENAME_FILE_FAILURE,
    payload: { error }
  }),
  moveFile: ({ file, to, folder, masterHandle }) => ({
    type: MOVE_FILE,
    payload: { file, to, folder, masterHandle }
  }),
  moveFileSuccess: ({ masterHandle, file }) => ({
    type: MOVE_FILE_SUCCESS,
    payload: { masterHandle, file }
  }),
  moveFileFailure: ({ error }) => ({
    type: MOVE_FILE_FAILURE,
    payload: { error }
  }),
  removeFileByVersion: ({ name, version, directory, masterHandle }) => ({
    type: REMOVE_FILE_BY_VERSION,
    payload: { name, version, directory, masterHandle }
  }),
  removeFileSuccess: ({ masterHandle, directory, version }) => ({
    type: REMOVE_FILE_SUCCESS,
    payload: { masterHandle, directory, version }
  }),
  removeFileError: ({ error }) => ({
    type: REMOVE_FILE_ERROR,
    payload: { error }
  }),
  removeFiles: ({ files, masterHandle, directory }) => ({
    type: REMOVE_FILES,
    payload: { files, masterHandle, directory } // files = [{ handle, name }]
  })
});

export default ACTIONS;
