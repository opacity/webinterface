const CREATE_FOLDER = "opacity/folders/create-folder";
const CREATE_FOLDER_SUCCESS = "opacity/folders/create-folder-success";
const CREATE_FOLDER_FAILURE = "opacity/folders/create-folder-failure";
const REMOVE_FOLDER = "opacity/folder/remove-folder";
const REMOVE_FOLDER_SUCCESS = "opacity/folder/remove-folder-success";
const REMOVE_FOLDER_FAILURE = "opacity/folder/remove-folder-failure";
const RENAME_FOLDER = "opacity/folder/rename-folder";
const RENAME_FOLDER_SUCCESS = "opacity/folder/rename-folder-success";
const RENAME_FOLDER_FAILURE = "opacity/folder/rename-folder-failure";
const MOVE_FOLDER = "opacity/folder/move-folder";
const MOVE_FOLDER_SUCCESS = "opacity/folder/move-folder-success";
const MOVE_FOLDER_FAILURE = "opacity/folder/move-folder-failure";

const ACTIONS = Object.freeze({
  CREATE_FOLDER,
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_FAILURE,
  REMOVE_FOLDER,
  REMOVE_FOLDER_SUCCESS,
  REMOVE_FOLDER_FAILURE,
  RENAME_FOLDER,
  RENAME_FOLDER_SUCCESS,
  RENAME_FOLDER_FAILURE,
  MOVE_FOLDER,
  MOVE_FOLDER_SUCCESS,
  MOVE_FOLDER_FAILURE,

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
  removeFolder: ({ masterHandle, directory, name, folder }) => ({
    type: REMOVE_FOLDER,
    payload: { masterHandle, directory, name, folder }
  }),
  removeFolderSuccess: ({ masterHandle, directory }) => ({
    type: REMOVE_FOLDER_SUCCESS,
    payload: { masterHandle, directory }
  }),
  removeFolderFailure: ({ error }) => ({
    type: REMOVE_FOLDER_FAILURE,
    payload: { error }
  }),
  renameFolder: ({ folder, name, newName, masterHandle }) => ({
    type: RENAME_FOLDER,
    payload: { masterHandle, folder, newName, name }
  }),
  renameFolderSuccess: ({ masterHandle, folder }) => ({
    type: RENAME_FOLDER_SUCCESS,
    payload: { masterHandle, folder }
  }),
  renameFolderFailure: ({ error }) => ({
    type: RENAME_FOLDER_FAILURE,
    payload: { error }
  }),
  moveFolder: ({ folder, to, currentFolder, masterHandle }) => ({
    type: MOVE_FOLDER,
    payload: { folder, to, currentFolder, masterHandle }
  }),
  moveFolderSuccess: ({ masterHandle, folder }) => ({
    type: MOVE_FOLDER_SUCCESS,
    payload: { masterHandle, folder }
  }),
  moveFolderFailure: ({ error }) => ({
    type: MOVE_FOLDER_FAILURE,
    payload: { error }
  })
});

export default ACTIONS;
