const DISCARD = "opacity/discard/stream";
const DISCARD_PROGRESS = "opacity/discard/stream-discard-progress";
const DISCARD_SUCCESS = "opacity/discard/stream-discard-success";
const DISCARD_ERROR = "opacity/discard/stream-discard-error";

const ACTIONS = Object.freeze({
  DISCARD,
  DISCARD_PROGRESS,
  DISCARD_SUCCESS,
  DISCARD_ERROR,

  streamDiscard: ({ handle }) => ({
    type: DISCARD,
    payload: { handle }
  }),
  streamDiscardProgress: ({ progress }) => ({
    type: DISCARD_PROGRESS,
    payload: { progress }
  }),
  streamDiscardSuccess: ({ handle }) => ({
    type: DISCARD_SUCCESS,
    payload: { handle }
  }),
  streamDiscardError: ({ err }) => ({
    type: DISCARD_ERROR,
    payload: { err }
  })
});

export default ACTIONS;
