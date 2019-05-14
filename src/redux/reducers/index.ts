import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import coinMarketCap from "./coinmarketcap-reducer";
import signup from "./signup-reducer";
import authentication from "./authentication-reducer";

export default combineReducers({
  coinMarketCap,
  signup,
  authentication,
  router: routerReducer
});
