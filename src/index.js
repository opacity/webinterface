import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router";

import { store, persistor } from "./redux";
import history from "./redux/history";

import Root from "./components/root";
import Agreement from "./components/agreement";
import BrokersDown from "./components/brokers-down";
import LandingPage from "./components/landing-page";
import Login from "./components/login";
import ForgotPage from "./components/forgot-page";
import Subscription from "./components/subscription";
import Signup from "./components/signup";
import TeamPage from "./components/team-page";
import StandsOut from "./components/stands-out";
import FileManager from "./components/file-manager";

import ErrorPage from "./components/error-page";
import ErrorTracker from "./services/error-tracker";
import { unregister } from "./register-service-worker";

import { AGREEMENT_TYPES } from "./config";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Root>
          <Route component={ScrollToTop} />
          <Switch>
            <Route exact path="/" component={LandingPage} />

            <Route path="/error-page" component={ErrorPage} />
            <Route path="/brokers-down" component={BrokersDown} />
            <Route path="/subscription" component={Subscription} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/stands-out" component={StandsOut} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-page" component={ForgotPage} />
            <Route path="/team-page" component={TeamPage} />
            <Route path="/file-manager" component={FileManager} />

            <Route
              path="/terms-of-service"
              render={() => (
                <Agreement
                  title="Terms of Service"
                  type={AGREEMENT_TYPES.TERMS_OF_SERVICE}
                />
              )}
            />
            <Route
              path="/privacy-policy"
              render={() => (
                <Agreement
                  title="Privacy Policy"
                  type={AGREEMENT_TYPES.PRIVACY_POLICY}
                />
              )}
            />
          </Switch>
        </Root>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

ErrorTracker.context(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
  unregister();
});
