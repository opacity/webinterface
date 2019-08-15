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
  listenForUpdates: ({ masterHandle, folder }) => ({
    type: LISTEN_FOR_UPDATES,
    payload: { masterHandle, folder }
  }),
  getFileList: ({ masterHandle, folder }) => ({
    type: GET_FILE_LIST,
    payload: { masterHandle, folder }
  })
});

export default ACTIONS;
