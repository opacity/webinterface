import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routerMiddleware } from "react-router-redux";
import createRavenMiddleware from "raven-for-redux";

import epics from "./epics";
import reducer from "./reducers";
import history from "./history";
import Raven from "../services/error-tracker";

const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const middleware = [
  process.env.NODE_ENV === "development" && createLogger(),
  epicMiddleware,
  routerMiddleware(history),
  createRavenMiddleware(Raven, {})
].filter(x => !!x);

const persistConfig = {
  key: "opacity",
  storage: storage,
  whitelist: []
};

export const store = createStore(
  persistReducer(persistConfig, reducer),
  composeFn(applyMiddleware(...middleware))
);

export const persistor = persistStore(store, {}, () => {
  // store.dispatch(uploadActions.refreshIncompleteUploads());
});

epicMiddleware.run(epics);
