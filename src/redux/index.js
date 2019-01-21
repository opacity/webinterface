import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import { persistReducer, persistStore, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routerMiddleware } from "react-router-redux";
import createRavenMiddleware from "raven-for-redux";

import epics from "./epics";
import reducer from "./reducers";
import history from "./history";
import Raven from "../services/error-tracker";
import { UPLOAD_STATUSES } from "../config";

const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
  process.env.NODE_ENV === `development` && createLogger(),
  createEpicMiddleware(epics),
  routerMiddleware(history),
  createRavenMiddleware(Raven, {})
].filter(x => !!x);

const uploadTransform = createTransform(
  inboundState => inboundState,
  outboundState => {
    const { history } = outboundState;
    const sentFiles = history.filter(f => f.status === UPLOAD_STATUSES.SENT);
    return { ...outboundState, history: sentFiles };
  },
  { whitelist: ["upload"] }
);

const persistConfig = {
  key: "opacity",
  storage: storage,
  whitelist: [],
  transforms: [uploadTransform]
};

export const store = createStore(
  persistReducer(persistConfig, reducer),
  composeFn(applyMiddleware(...middleware))
);

export const persistor = persistStore(store, {}, () => {
  // store.dispatch(uploadActions.refreshIncompleteUploads());
});
