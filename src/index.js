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
import Header from "./components/shared/header";
import Agreement from "./components/agreement";
import BrokersDown from "./components/brokers-down";
import DownloadForm from "./components/download-form";
import DownloadStarted from "./components/download-started";
import DownloadComplete from "./components/download-complete";
import DownloadUploadHistory from "./components/download-upload-history";
import FileManager from "./components/file-manager";
import LandingPage from "./components/landing-page";
import LoginOrRegister from "./components/login-or-register";
import UploadForm from "./components/upload-form";
import UploadStarted from "./components/upload-started";
import UploadProgress from "./components/upload-progress";
import UploadComplete from "./components/upload-complete";
import RetrievingInvoice from "./components/retrieving-invoice";
import PaymentInvoice from "./components/payment-invoice";
import PaymentConfirm from "./components/payment-confirm";
import PageNavigationPrompt from "./components/page-navigation-prompt";
import Subscription from "./components/subscription";
import Signup from "./components/signup";

import ErrorPage from "./components/error-page";
import ErrorTracker from "./services/error-tracker";
import { unregister } from "./register-service-worker";

import { AGREEMENT_TYPES } from "./config";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Root>
          <PageNavigationPrompt />
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/storage" component={PathChoice} />
            <Route path="/storage/download-form" component={DownloadForm} />
            <Route
              path="/storage/download-started"
              component={DownloadStarted}
            />
            <Route
              path="/storage/download-complete"
              component={DownloadComplete}
            />
            <Route
              path="/storage/download-upload-history"
              component={DownloadUploadHistory}
            />
            <Route path="/storage/upload-form" component={UploadForm} />
            <Route path="/storage/upload-started" component={UploadStarted} />
            <Route path="/storage/upload-progress" component={UploadProgress} />
            <Route path="/storage/upload-complete" component={UploadComplete} />
            <Route
              path="/storage/retrieving-invoice"
              component={RetrievingInvoice}
            />
            <Route path="/storage/payment-invoice" component={PaymentInvoice} />
            <Route path="/storage/payment-confirm" component={PaymentConfirm} />
            <Route path="/storage/error-page" component={ErrorPage} />
            <Route path="/storage/brokers-down" component={BrokersDown} />
            <Route path="/storage/file-manager" component={FileManager} />

            <Route path="/subscription" component={Subscription} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/login-or-register" component={LoginOrRegister} />

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
