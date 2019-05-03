import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import coinMarketCap from "../reducers/coinmarketcap-reducer";
import upload from "../reducers/upload-reducer";
import uploadHistory from "../reducers/upload-history-reducer";
import download from "../reducers/download-reducer";
import signup from "../reducers/signup-reducer";
import authentication from "../reducers/authentication-reducer";
import hamburger from "../reducers/hamburger-reducer";

export default combineReducers({
  coinMarketCap,
  upload,
  uploadHistory,
  download,
  signup,
  authentication,
  hamburger,
  router: routerReducer
});
