const ADD_FILE = "opacity/filemanager/add-file";
const DELETE_FILE = "opacity/filemanager/delete-file";
const RESET_FILES = "opacity/filemanager/reset-files";
const SET_FILES = "opacity/filemanager/set-files";

const ACTIONS = Object.freeze({
  ADD_FILE,
  DELETE_FILE,
  RESET_FILES,
  SET_FILES,

  addItem: ({ handle }) => ({
    type: ADD_FILE,
    payload: { handle }
  }),
  deleteItem: ({ handle }) => ({
    type: DELETE_FILE,
    payload: { handle }
  }),
  resetFiles: () => ({
    type: RESET_FILES
  }),
  setFiles: ({ files }) => ({
    type: SET_FILES,
    payload: { files }
  })
});

export default ACTIONS;
