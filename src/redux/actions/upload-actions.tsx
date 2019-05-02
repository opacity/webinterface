const UPLOAD = "opacity/upload/stream";
const UPLOAD_PROGRESS = "opacity/upload/stream-upload-progress";
const UPLOAD_SUCCESS = "opacity/upload/stream-upload-success";
const UPLOAD_ERROR = "opacity/upload/stream-upload-error";

const ACTIONS = Object.freeze({
  UPLOAD,
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,

  streamUpload: ({ file }) => ({
    type: UPLOAD,
    payload: { file }
  }),
  streamUploadProgress: ({ progress }) => ({
    type: UPLOAD_PROGRESS,
    payload: { progress }
  }),
  streamUploadSuccess: ({ handle }) => ({
    type: UPLOAD_SUCCESS,
    payload: { handle }
  }),
  streamUploadError: ({ handle, err }) => ({
    type: UPLOAD_ERROR,
    payload: { err }
  })
});

export default ACTIONS;
