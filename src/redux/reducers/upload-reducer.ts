import uploadActions from "../actions/upload-actions";

import { UPLOAD_STATUSES } from "../../config";

const initState = {
  uploadProgress: 0,
  status: UPLOAD_STATUSES.PENDING
};

const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case uploadActions.UPLOAD: {
      return { ...state, uploadProgress: 0, status: UPLOAD_STATUSES.PENDING };
    }

    case uploadActions.UPLOAD_PROGRESS: {
      const { progress } = action.payload;
      return {
        ...state,
        uploadProgress: progress,
        status: UPLOAD_STATUSES.SENDING
      };
    }

    case uploadActions.UPLOAD_SUCCESS: {
      return { ...state, uploadProgress: 100, status: UPLOAD_STATUSES.SENT };
    }

    default:
      return state;
  }
};

export default uploadReducer;
