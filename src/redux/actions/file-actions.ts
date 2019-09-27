const RENAME_FILE = "opacity/file/rename-file";
const RENAME_FILE_SUCCESS = "opacity/file/rename-file-success";
const RENAME_FILE_FAILURE = "opacity/file/rename-file-failure";
const MOVE_FILE = "opacity/file/move-file";
const MOVE_FILE_SUCCESS = "opacity/file/move-file-success";
const MOVE_FILE_FAILURE = "opacity/file/move-file-failure";

const ACTIONS = Object.freeze({
  RENAME_FILE,
  RENAME_FILE_SUCCESS,
  RENAME_FILE_FAILURE,
  MOVE_FILE,
  MOVE_FILE_SUCCESS,
  MOVE_FILE_FAILURE,

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
  })
});

export default ACTIONS;
