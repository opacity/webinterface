const GET_FILE_LIST = "opacity/finder/get-file-list";
const SET_LIST = "opacity/finder/set-list";

const ACTIONS = Object.freeze({
  GET_FILE_LIST,
  SET_LIST,

  setList: ({ files, folders, masterHandle }) => ({
    type: SET_LIST,
    payload: { files, folders, masterHandle }
  }),
  getFileList: ({ masterHandle, folder }) => ({
    type: GET_FILE_LIST,
    payload: { masterHandle, folder }
  })
});

export default ACTIONS;
