import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import coinMarketCap from "./coinmarketcap-reducer";
import signup from "./signup-reducer";
import authentication from "./authentication-reducer";
import upload from "./upload-reducer";
import download from "./download-reducer";

export default combineReducers({
  coinMarketCap,
  signup,
  authentication,
  upload,
  download,
  router: routerReducer
});
