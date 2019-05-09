import uploadActions from "../actions/upload-actions";

const initState = {
  files: []
};

interface UploadedFile {
  handle: string;
  filename: string;
  progress: number;
}

const fileGenerator = ({ handle, filename, progress }): UploadedFile => ({
  handle,
  filename,
  progress
});

const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case uploadActions.MONITOR_FILE:
      return {
        ...state,
        files: [
          ...state.files,
          fileGenerator({
            handle: action.payload.handle,
            filename: action.payload.filename,
            progress: 0
          })
        ]
      };

    case uploadActions.UPLOAD_PROGRESS:
      const file = state.files.find(
        (f: UploadedFile) => f.handle === action.payload.handle
      );
      return {
        ...state,
        files: [
          ...state.files.filter(
            (f: UploadedFile) => f.handle !== action.payload.handle
          ),
          fileGenerator({
            filename: file ? (file as UploadedFile).filename : "Unknown",
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
