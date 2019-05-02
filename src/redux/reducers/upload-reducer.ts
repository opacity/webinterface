import uploadActions from "../actions/upload-actions";

const initState = {
  uploadProgress: 0
};

const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case uploadActions.UPLOAD_PROGRESS: {
      const { progress } = action.payload;
      return { ...state, uploadProgress: progress };
    }

    case uploadActions.UPLOAD_SUCCESS: {
      return { ...state, uploadProgress: 100 };
    }

    default:
      return state;
  }
};

export default uploadReducer;
