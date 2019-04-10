import { combineEpics } from "redux-observable";
import { push, replace } from "react-router-redux";
import { Observable } from "rxjs/Rx";
import { EMPTY } from "rxjs";
import queryString from "query-string";

import { API } from "../../config";
import uploadActions from "../actions/upload-actions";
import { UPLOAD_STATE } from "../reducers/upload-reducer";
import navigationActions from "../actions/navigation-actions";
import { execObservableIfBackendAvailable } from "./utils";

const LOCATION_CHANGE_ACTION = "@@router/LOCATION_CHANGE";

const goToDownloadForm = (action$, store) => {
  return action$
    .ofType(navigationActions.VISIT_DOWNLOAD_FORM)
    .map(() => push("/download-form"));
};

const goToUploadForm = (action$, store) => {
  return action$.ofType(navigationActions.VISIT_UPLOAD_FORM).mergeMap(() => {
    return execObservableIfBackendAvailable(
      [API.BROKER_NODE_A, API.BROKER_NODE_B],
      () =>
        new Observable(o => {
          o.next(push("/upload-form"));
          o.complete();
        }),
      () =>
        new Observable(o => {
          o.next(replace("/brokers-down"));
          o.complete();
        })
    );
  });
};

const goToUploadStarted = (action$, store) => {
  return action$
    .ofType(uploadActions.PAYMENT_CONFIRMED)
    .map(action => replace("/upload-started"));
};

const goToUploadProgress = (action$, store) => {
  return action$
    .ofType(uploadActions.CHUNKS_DELIVERED)
    .map(action => replace(`/upload-progress#handle=${action.payload.handle}`));
};

const goToUploadCompleteStream = (action$, store) => {
  return action$
    .ofType(uploadActions.UPLOAD_SUCCESS)
    .map(() => replace("/upload-complete"));
};

const goToPaymentInvoiceStream = (action$, store) => {
  return action$
    .ofType(uploadActions.INVOICED)
    .map(() => replace("/payment-invoice"));
};

const goToPaymentConfirmationStream = (action$, store) => {
  return action$
    .ofType(uploadActions.PAYMENT_PENDING)
    .map(action => replace("/payment-confirm"));
};

const goToErrorPage = (action$, store) => {
  return action$
    .ofType(navigationActions.ERROR_PAGE)
    .map(() => replace("/error-page"));
};

const goToBrokersDownPage = (action$, store) => {
  return action$
    .ofType(navigationActions.BROKERS_DOWN)
    .map(() => replace("/brokers-down"));
};

const uploadProgressListener = (action$, store) => {
  return action$
    .ofType(LOCATION_CHANGE_ACTION)
    .filter(({ payload: { pathname } }) => pathname === "/upload-progress")
    .switchMap(({ payload: { hash } }) => {
      const {
        upload: { uploadState }
      } = store.getState();

      // Prevent from getting into a cycle from the normal synchronous flow.
      if (uploadState === UPLOAD_STATE.COMPLETE) return EMPTY;

      const { handle } = queryString.parse(hash);
      return Observable.of(uploadActions.streamChunksDelivered({ handle }));
    });
};

export default combineEpics(
  goToDownloadForm,
  goToUploadForm,
  goToUploadStarted,
  goToUploadProgress,
  goToUploadCompleteStream,
  goToPaymentInvoiceStream,
  goToPaymentConfirmationStream,
  goToErrorPage,
  goToBrokersDownPage,
  uploadProgressListener
);
