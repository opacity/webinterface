import Raven from "raven-js";
import _ from "lodash";

Raven.config(
  "https://8fdbdab452f04a43b5c3f2e00ec126f7@sentry.io/295597"
).install();

let lastAlertShownAt: number;

export const alertUser = err => {
  Raven.captureException(err);

  const now = +new Date();
  if (_.isUndefined(lastAlertShownAt) || now - lastAlertShownAt > 1000) {
    window.alert(err);
    lastAlertShownAt = +new Date();
  }
};

export default Raven;
