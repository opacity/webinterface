import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import Modal from "react-modal";

import { store, persistor } from "./redux";
import history from "./redux/history";

import Root from "./components/root";
import AuthenticatedRoute from "./components/routes/authenticated-route";
import Agreement from "./components/agreement";
import BrokersDown from "./components/brokers-down";
import LandingPage from "./components/landing-page";
import Login from "./components/login";
import Logout from "./components/logout";
import ForgotPage from "./components/forgot-page";
import Subscription from "./components/subscription";
import Signup from "./components/signup";
import TeamPage from "./components/team-page";
import StandsOut from "./components/stands-out";
import FileManager from "./components/file-manager";
import SharePage from "./components/share-page";

import ErrorPage from "./components/error-page";
import ErrorTracker from "./services/error-tracker";
import { unregister } from "./register-service-worker";

import { AGREEMENT_TYPES } from "./config";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

Modal.setAppElement("#root");

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
            <Route path="/logout" component={Logout} />
            <Route path="/forgot-page" component={ForgotPage} />
            <Route path="/team-page" component={TeamPage} />
            <Route path="/share" component={SharePage} />
            <AuthenticatedRoute path="/file-manager" component={FileManager} />

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
            <Route
              path="/code-review-license"
              render={() => (
                <Agreement
                  title="Opacity Code Review License"
                  type={AGREEMENT_TYPES.CODE_REVIEW_LICENSE}
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
