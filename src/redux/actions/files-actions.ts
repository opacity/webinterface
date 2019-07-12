const GET_FILE_LIST = "opacity/files/get-file-list";
const SET_LIST = "opacity/files/set-list";

const ACTIONS = Object.freeze({
  GET_FILE_LIST,
  SET_LIST,

  setList: ({ list, folders }) => ({
    type: SET_LIST,
    payload: { list, folders }
  }),
  getFileList: ({ masterHandle, folder }) => ({
    type: GET_FILE_LIST,
    payload: { masterHandle, folder }
  })
});

export default ACTIONS;
