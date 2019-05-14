const REMOVE_FILE = "opacity/remove/remove-file";
const REMOVE_PROGRESS = "opacity/remove/remove-progress";
const REMOVE_SUCCESS = "opacity/remove/remove-success";
const REMOVE_ERROR = "opacity/remove/remove-error";

const ACTIONS = Object.freeze({
  REMOVE_FILE,
  REMOVE_PROGRESS,
  REMOVE_SUCCESS,
  REMOVE_ERROR,

  removeFile: ({ handle }) => ({
    type: REMOVE_FILE,
    payload: { handle }
  }),
  removeProgress: ({ progress }) => ({
    type: REMOVE_PROGRESS,
    payload: { progress }
  }),
  removeSuccess: ({ handle }) => ({
    type: REMOVE_SUCCESS,
    payload: { handle }
  }),
  removeError: ({ err }) => ({
    type: REMOVE_ERROR,
    payload: { err }
  })
});

export default ACTIONS;
