const CREATE_FOLDER = "opacity/folder/create-folder";
const CREATE_FOLDER_SUCCESS = "opacity/folder/create-folder-success";
const DELETE_FOLDER = "opacity/folder/delete-folder";
const DELETE_FOLDER_SUCCESS = "opacity/folder/delete-folder-success";

const ACTIONS = Object.freeze({
  CREATE_FOLDER,
  CREATE_FOLDER_SUCCESS,
  DELETE_FOLDER,
  DELETE_FOLDER_SUCCESS,

  createFolder: ({ masterHandle, name }) => ({
    type: CREATE_FOLDER,
    payload: { masterHandle, name }
  }),
  createFolderSuccess: () => ({
    type: CREATE_FOLDER_SUCCESS
  }),
  deleteFolder: ({ masterHandle, name }) => ({
    type: DELETE_FOLDER,
    payload: { masterHandle, name }
  }),
  deleteFolderSuccess: () => ({
    type: DELETE_FOLDER_SUCCESS
  })
});

export default ACTIONS;
