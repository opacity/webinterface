const RENAME_FILE = "opacity/file/rename-file";
const RENAME_FILE_SUCCESS = "opacity/file/rename-file-success";
const RENAME_FILE_ERROR = "opacity/file/rename-file-error";

const ACTIONS = Object.freeze({
  RENAME_FILE,
  RENAME_FILE_SUCCESS,
  RENAME_FILE_ERROR,

  renameFile: ({ name, newName, folder, masterHandle }) => ({
    type: RENAME_FILE,
    payload: { name, newName, folder, masterHandle }
  }),
  renameFileSuccess: ({ masterHandle, folder }) => ({
    type: RENAME_FILE_SUCCESS,
    payload: { masterHandle, folder }
  }),
  renameFileError: ({ error }) => ({
    type: RENAME_FILE_ERROR,
    payload: { error }
  })
});

export default ACTIONS;
