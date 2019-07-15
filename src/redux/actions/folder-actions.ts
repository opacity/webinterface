const CREATE_FOLDER = "opacity/folders/create-folder";
const CREATE_FOLDER_SUCCESS = "opacity/folders/create-folder-success";
const CREATE_FOLDER_FAILURE = "opacity/folders/create-folder-failure";

const ACTIONS = Object.freeze({
  CREATE_FOLDER,
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_FAILURE,

  createFolder: ({ masterHandle, folder, name }) => ({
    type: CREATE_FOLDER,
    payload: { masterHandle, folder, name }
  }),
  createFolderSuccess: ({ masterHandle, folder }) => ({
    type: CREATE_FOLDER_SUCCESS,
    payload: { masterHandle, folder }
  }),
  createFolderFailure: ({ error }) => ({
    type: CREATE_FOLDER_FAILURE,
    payload: { error }
  })
});

export default ACTIONS;
