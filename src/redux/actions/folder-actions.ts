const CREATE_FOLDER = "opacity/folders/create-folder";
const CREATE_FOLDER_SUCCESS = "opacity/folders/create-folder-success";
const CREATE_FOLDER_FAILURE = "opacity/folders/create-folder-failure";
const REMOVE_FOLDER = "opacity/folder/remove-folder";
const REMOVE_FOLDER_SUCCESS = "opacity/folder/remove-folder-success";
const REMOVE_FOLDER_FAILURE = "opacity/folder/remove-folder-failure";

const ACTIONS = Object.freeze({
  CREATE_FOLDER,
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_FAILURE,
  REMOVE_FOLDER,
  REMOVE_FOLDER_SUCCESS,
  REMOVE_FOLDER_FAILURE,

  createFolder: ({ masterHandle, directory, name }) => ({
    type: CREATE_FOLDER,
    payload: { masterHandle, directory, name }
  }),
  createFolderSuccess: ({ masterHandle, directory }) => ({
    type: CREATE_FOLDER_SUCCESS,
    payload: { masterHandle, directory }
  }),
  createFolderFailure: ({ error }) => ({
    type: CREATE_FOLDER_FAILURE,
    payload: { error }
  }),
  removeFolder: ({ masterHandle, directory, name }) => ({
    type: REMOVE_FOLDER,
    payload: { masterHandle, directory, name }
  }),
  removeFolderSuccess: ({ masterHandle, directory }) => ({
    type: REMOVE_FOLDER_SUCCESS,
    payload: { masterHandle, directory }
  }),
  removeFolderFailure: ({ error }) => ({
    type: REMOVE_FOLDER_FAILURE,
    payload: { error }
  })
});

export default ACTIONS;
