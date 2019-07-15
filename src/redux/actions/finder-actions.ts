const GET_FILE_LIST = "opacity/finder/get-file-list";
const SET_LIST = "opacity/finder/set-list";

const ACTIONS = Object.freeze({
  GET_FILE_LIST,
  SET_LIST,

  setList: ({ files, folders }) => ({
    type: SET_LIST,
    payload: { files, folders }
  }),
  getFileList: ({ masterHandle, folder }) => ({
    type: GET_FILE_LIST,
    payload: { masterHandle, folder }
  })
});

export default ACTIONS;
