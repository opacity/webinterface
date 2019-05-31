const GET_FILE_LIST = "opacity/files/get-file-list";
const SET_LIST = "opacity/files/set-list";

const ACTIONS = Object.freeze({
  GET_FILE_LIST,
  SET_LIST,

  setList: ({ list }) => ({
    type: SET_LIST,
    payload: { list }
  }),
  getFileList: ({ masterHandle }) => ({
    type: GET_FILE_LIST,
    payload: { masterHandle }
  })
});

export default ACTIONS;
