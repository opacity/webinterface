const CREATE_FOLDER = "opacity/folder/create-folder";
const CREATE_FOLDER_SUCCESS = "opacity/folder/create-folder-success";
const CREATE_FOLDER_ERROR = "opacity/folder/create-folder-errror";
const REMOVE_FOLDER = "opacity/folder/remove-folder";
const REMOVE_FOLDER_SUCCESS = "opacity/folder/remove-folder-success";
const REMOVE_FOLDER_ERROR = "opacity/folder/remove-folder-error";

const ACTIONS = Object.freeze({
  CREATE_FOLDER,
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_ERROR,
  REMOVE_FOLDER,
  REMOVE_FOLDER_SUCCESS,
  REMOVE_FOLDER_ERROR,

  createFolder: ({ masterHandle, folder, name }) => ({
    type: CREATE_FOLDER,
    payload: { masterHandle, folder, name }
  }),
  createFolderSuccess: ({ masterHandle }) => ({
    type: CREATE_FOLDER_SUCCESS,
    payload: { masterHandle }
  }),
  createFolderError: ({ error }) => ({
    type: CREATE_FOLDER_ERROR,
    payload: { error }
  }),
  removeFolder: ({ masterHandle, folder, name }) => ({
    type: REMOVE_FOLDER,
    payload: { masterHandle, folder, name }
  }),
  removeFolderSuccess: ({ masterHandle }) => ({
    type: REMOVE_FOLDER_SUCCESS,
    payload: { masterHandle }
  }),
  removeFolderError: ({ error }) => ({
    type: REMOVE_FOLDER_ERROR,
    payload: { error }
  })
});

export default ACTIONS;
