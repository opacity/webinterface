import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import coinMarketCap from "../reducers/coinmarketcap-reducer";
import signup from "../reducers/signup-reducer";
import authentication from "../reducers/authentication-reducer";

export default combineReducers({
  coinMarketCap,
  signup,
  authentication,
  router: routerReducer
});
