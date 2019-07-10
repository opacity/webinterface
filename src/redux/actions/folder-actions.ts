const CREATE_FOLDER = "opacity/folder/create-folder";
const CREATE_FOLDER_SUCCESS = "opacity/folder/create-folder-success";

const ACTIONS = Object.freeze({
  CREATE_FOLDER,
  CREATE_FOLDER_SUCCESS,

  createFolder: ({ name }) => ({
    type: CREATE_FOLDER,
    payload: { name }
  }),
  createFolderSuccess: () => ({
    type: CREATE_FOLDER_SUCCESS
  })
});

export default ACTIONS;
