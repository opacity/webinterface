import downloadActions from "../actions/download-actions";

import { DOWNLOAD_STATUSES } from "../../config";

const initState = {
  downloadProgress: 0,
  status: DOWNLOAD_STATUSES.PENDING
};

const downloadReducer = (state = initState, action) => {
  switch (action.type) {
    case downloadActions.DOWNLOAD: {
      return {
        ...state,
        downloadProgress: 0,
        status: DOWNLOAD_STATUSES.PENDING
      };
    }

    case downloadActions.DOWNLOAD_PROGRESS: {
      const { progress } = action.payload;
      return {
        ...state,
        downloadProgress: progress,
        status: DOWNLOAD_STATUSES.DOWNLOADING
      };
    }

    case downloadActions.DOWNLOAD_SUCCESS: {
      return {
        ...state,
        downloadProgress: 100,
        status: DOWNLOAD_STATUSES.DOWNLOAD
      };
    }

    default:
      return state;
  }
};

export default downloadReducer;
