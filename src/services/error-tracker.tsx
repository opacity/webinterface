import Raven from "raven-js";

Raven.config(
  "https://8fdbdab452f04a43b5c3f2e00ec126f7@sentry.io/295597"
).install();

let lastAlertShownAt: number;
const REQUIRED_MS_BETWEEN_ALERTS = 1000;

export const alertUser = err => {
  Raven.captureException(err);

  const now = +new Date();
  if (
    // tslint:disable
    lastAlertShownAt === undefined ||
    now - lastAlertShownAt > REQUIRED_MS_BETWEEN_ALERTS
    // tslint:enable
  ) {
    window.alert(err);
    lastAlertShownAt = +new Date();
  }
};

export default Raven;
