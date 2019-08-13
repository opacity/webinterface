const GET_FILE_LIST = "opacity/finder/get-file-list";
const SET_LIST = "opacity/finder/set-list";
const LISTEN_FOR_UPDATES = "opacity/finder/listen-for-updates";

const ACTIONS = Object.freeze({
  GET_FILE_LIST,
  SET_LIST,
  LISTEN_FOR_UPDATES,

  setList: ({ files, folders, masterHandle }) => ({
    type: SET_LIST,
    payload: { files, folders, masterHandle }
  }),
  listenForUpdates: ({ masterHandle, directory }) => ({
    type: LISTEN_FOR_UPDATES,
    payload: { masterHandle, directory }
  }),
  getFileList: ({ masterHandle, directory }) => ({
    type: GET_FILE_LIST,
    payload: { masterHandle, directory }
  })
});

export default ACTIONS;
