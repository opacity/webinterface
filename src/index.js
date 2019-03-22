import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router";

import { store, persistor } from "./redux";
import history from "./redux/history";

import Root from "./components/root";
import PathChoice from "./components/path-choice";
import Agreement from "./components/agreement";
import BrokersDown from "./components/brokers-down";
import DownloadForm from "./components/download-form";
import DownloadStarted from "./components/download-started";
import DownloadComplete from "./components/download-complete";
import DownloadUploadHistory from "./components/download-upload-history";
import FileManager from "./components/file-manager";
import LandingPage from "./components/landing-page";
// import LoginOrRegister from "./components/login-or-register";
import UploadForm from "./components/upload-form";
import UploadStarted from "./components/upload-started";
import UploadProgress from "./components/upload-progress";
import UploadComplete from "./components/upload-complete";
import RetrievingInvoice from "./components/retrieving-invoice";
import PaymentInvoice from "./components/payment-invoice";
import PaymentConfirm from "./components/payment-confirm";
import PageNavigationPrompt from "./components/page-navigation-prompt";
// import Subscription from "./components/subscription";
// import Signup from "./components/signup";
import TeamPage from "./components/team-page";
import StandsOut from "./components/stands-out";

import ErrorPage from "./components/error-page";
import ErrorTracker from "./services/error-tracker";
import { unregister } from "./register-service-worker";

import { AGREEMENT_TYPES } from "./config";

// regular routes must now be wrapped in a subroute
// this is because they need to only render when there is no subdomain
// if they are NOT wrapped then they multiple routes could render at the same time
// they CANNOT be wrapped in a Switch, otherwise they will NOT render after the first
// this is because each will actually match the path ("/" matches any path)
// which is to allow a custom middleware which checks to see if the subdomain matches
const SubRoute = ({ sub = "", children, ...props }) => (
  <Route
    path="/"
    render={({ location }) => {
      const host = window.location.host;
      const curSub = host.slice(0, (host.lastIndexOf(".") + 1 || 1) - 1);
      const pathStart = window.location.pathname.split("/")[1];
      console.log(sub, curSub, location);
      // using subdomain
      if (sub === curSub) {
        return children("");
      }
      // no subdomain instead using path
      if (curSub.length === 0 && sub === pathStart) {
        return children(`/${pathStart}`);
      }
      // not using subdomain and not using path
      if (curSub === "www" || (curSub.length === 0 && sub.length === 0)) {
        return children("");
      }

      return null;
    }}
  />
);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Root>
          <PageNavigationPrompt />
          <SubRoute>
            {path => (
              <Switch>
                <Route exact path="/" component={LandingPage} />
                {/* <Route path="/subscription" component={Subscription} /> */}
                {/* <Route path="/sign-up" component={Signup} /> */}
                {/* <Route path="/login-or-register" component={LoginOrRegister} /> */}
                <Route path="/file-manager" component={FileManager} />
                <Route path="/team-page" component={TeamPage} />
                <Route path="/stands-out" component={StandsOut} />
              </Switch>
            )}
          </SubRoute>

          <SubRoute sub="storage">
            {path => (
              <Switch>
                <Route exact path={`${path}`} component={PathChoice} />
                <Route path={`${path}/download-form`} component={DownloadForm} />
                <Route
                  path={`${path}/download-started`}
                  component={DownloadStarted}
                />
                <Route
                  path={`${path}/download-complete`}
                  component={DownloadComplete}
                />
                <Route
                  path={`${path}/download-upload-history`}
                  component={DownloadUploadHistory}
                />
                <Route path={`${path}/upload-form`} component={UploadForm} />
                <Route path={`${path}/upload-started`} component={UploadStarted} />
                <Route path={`${path}/upload-progress`} component={UploadProgress} />
                <Route path={`${path}/upload-complete`} component={UploadComplete} />
                <Route
                  path={`${path}/retrieving-invoice`}
                  component={RetrievingInvoice}
                />
                <Route path={`${path}/payment-invoice`} component={PaymentInvoice} />
                <Route path={`${path}/payment-confirm`} component={PaymentConfirm} />
                <Route path={`${path}/error-page`} component={ErrorPage} />
                <Route path={`${path}/brokers-down`} component={BrokersDown} />
                <Route path={`${path}/file-manager`} component={FileManager} />

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
            )}
          </SubRoute>
        </Root>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

ErrorTracker.context(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
  unregister();
});
