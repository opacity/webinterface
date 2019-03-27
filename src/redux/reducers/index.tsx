import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import upload from "../reducers/upload-reducer";
import uploadHistory from "../reducers/upload-history-reducer";
import download from "../reducers/download-reducer";
import signup from "../reducers/signup-reducer";
import authentication from "../reducers/authentication-reducer";

export default combineReducers({
  upload,
  uploadHistory,
  download,
  signup,
  authentication,
  router: routerReducer
});
