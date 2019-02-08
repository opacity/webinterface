import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";

import uploadActions from "../actions/upload-actions";
import { execObservableIfBackendAvailable } from "./utils";
import {
  streamUpload,
  streamUploadProgress
} from "../../services/opacity-stream";
import { alertUser } from "../../services/error-tracker";
import { API } from "../../config";
import navigationActions from "../actions/navigation-actions";

import Metamask from "../../services/metamask";

const METAMASK_URL = "https://metamask.io/";

const streamUploadEpic = action$ =>
  action$.ofType(uploadActions.UPLOAD).mergeMap(action => {
    const {
      file,
      retentionYears,
      brokers: { alpha, beta }
    } = action.payload;

    const params = { alpha, beta, retentionYears };

    return execObservableIfBackendAvailable(
      [API.BROKER_NODE_A, API.BROKER_NODE_B],
      () =>
        Observable.create(o => {
          streamUpload(file, params, {
            invoiceCb: invoice => {
              o.next(uploadActions.streamInvoiced(invoice));
            },

            paymentPendingCb: _ => {
              o.next(uploadActions.streamPaymentPending());
            },

            paymentConfirmedCb: payload => {
              o.next(uploadActions.streamPaymentConfirmed(payload));
            },

            chunksProgressCb: ({ progress }) => {
              o.next(uploadActions.streamChunksProgress({ progress }));
            },

            chunksUploadedCb: () => {
              o.next(uploadActions.streamChunksUploaded());
            },

            chunksDeliveredCb: payload => {
              const handle = payload.handle;
              o.next(uploadActions.streamChunksDelivered({ handle }));
            },

            errCb: err => {
              let handle; // TODO
              alertUser(err);
              o.next(uploadActions.streamUploadError({ handle, err }));

              // Use complete instead of error so observable isn't taken down.
              o.complete();
            }
          });
        }),
      () =>
        Observable.create(o => {
          o.next(navigationActions.brokersDownPageAction());
        })
    );
  });

const streamUploadProgressEpic = action$ =>
  action$.ofType(uploadActions.CHUNKS_DELIVERED).mergeMap(action => {
    const { handle } = action.payload;

    return Observable.create(o => {
      streamUploadProgress(handle, {
        uploadProgressCb: ({ progress }) => {
          o.next(uploadActions.streamUploadProgress({ progress }));
        },
        doneCb: ({ handle }) => {
          o.next(uploadActions.streamUploadSuccess({ handle }));
          o.complete();
        },
        errCb: err => {
          o.next(uploadActions.streamUploadError({ handle, err }));
          o.complete();
        }
      });
    });
  });

const metamaskAccountEpic = action$ =>
  action$.ofType(uploadActions.METAMASK_CREATE_TRANSACTION).mergeMap(action => {
    const { cost, ethAddress, gasPrice } = action.payload;
    return Observable.fromPromise(Metamask.fetchDefaultMetamaskAccount())
      .map(account =>
        uploadActions.metamaskPaymentPending({
          to: ethAddress,
          from: account,
          cost,
          gasPrice
        })
      )
      .catch(e => Observable.of(uploadActions.metamaskAccountError(e)));
  });

const metamaskTransactionEpic = action$ =>
  action$
    .ofType(uploadActions.METAMASK_PAYMENT_PENDING)
    .mergeMap(action => {
      const { from, to, cost, gasPrice } = action.payload;

      return Observable.fromPromise(Metamask.getTransactionNonce(from))
        .map(nonce => {
          return {
            to,
            from,
            cost,
            gasPrice,
            nonce
          };
        })
        .catch(e => Observable.of(uploadActions.metamaskPaymentError(e)));
    })
    .mergeMap(transaction => {
      const { cost, to, from, gasPrice, nonce } = transaction;

      return Observable.fromPromise(
        Metamask.sendTransaction({
          cost,
          to,
          from,
          gasPrice,
          nonce: nonce + 1
        })
      )
        .map(() => uploadActions.metamaskPaymentSuccess())
        .catch(e => Observable.of(uploadActions.metamaskPaymentError(e)));
    });

const metamaskAccountErrorEpic = action$ =>
  action$.ofType(uploadActions.METAMASK_ACCOUNT_ERROR).do(() => {
    window.open(METAMASK_URL, " _blank");
  });

export default combineEpics(
  streamUploadEpic,
  streamUploadProgressEpic,
  metamaskAccountEpic,
  metamaskAccountErrorEpic,
  metamaskTransactionEpic
);
