import uploadActions from "../actions/upload-actions";

const initState = {
  files: []
};

interface UploadedFile {
  handle: string;
  progress: number;
}

const fileGenerator = ({ handle, progress }): UploadedFile => ({
  handle,
  progress
});

const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case uploadActions.MONITOR_FILE:
      return {
        ...state,
        files: fileGenerator({ handle: action.payload.handle, progress: 0 })
      };

    case uploadActions.UPLOAD_PROGRESS:
      return {
        ...state,
        files: [
          ...state.files.filter(
            (f: UploadedFile) => f.handle !== action.payload.handle
          ),
          fileGenerator({
            handle: action.payload.handle,
            progress: action.payload.progress
          })
        ]
      };

    case uploadActions.UPLOAD_SUCCESS:
      return {
        ...state,
        files: state.files.filter(
          (f: UploadedFile) => f.handle !== action.payload.handle
        )
      };

    default:
      return state;
  }
};

export default uploadReducer;
