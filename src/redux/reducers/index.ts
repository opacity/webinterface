import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import coinMarketCap from "./coinmarketcap-reducer";
import signup from "./signup-reducer";
import upgrade from "./upgrade-reducer";
import finder from "./finder-reducer";
import authentication from "./authentication-reducer";
import fiatPayment from "./fiat-payment-reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    coinMarketCap,
    signup,
    upgrade,
    finder,
    fiatPayment,
    authentication
  });
