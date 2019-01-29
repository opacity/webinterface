import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import Web3 from "web3";

import uploadActions from "../actions/upload-actions";
import { execObservableIfBackendAvailable } from "./utils";
import {
  streamUpload,
  streamUploadProgress
} from "../../services/opacity-stream";
import { alertUser } from "../../services/error-tracker";
import { API } from "../../config";
import navigationActions from "../actions/navigation-actions";

const web3Provider = new Web3.providers.HttpProvider(
  "https://mainnet.infura.io/v3/a40f331b1e204073b73e27628a5cb308"
);
const web3 = new Web3(web3.currentProvider);

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

const metamaskEpic = action$ =>
  action$
    .ofType(uploadActions.METAMASK_PAYMENT_PENDING)
    .mergeMap(action => {
      const { cost, ethAddress } = action.payload;
      return Observable.fromPromise(web3.eth.getAccounts()).map(accounts => {
        console.log("fffffffffffF: ", accounts);
        return { cost, ethAddress, sender: accounts[0] };
      });
    })
    .mergeMap(({ cost, ethAddress, sender }) =>
      Observable.create(o => {
        web3.eth.sendTransaction(
          {
            to: ethAddress,
            from: sender,
            value: cost.toString()
          },
          (err, res) => {
            o.complete(
              err
                ? uploadActions.metamaskPaymentError(err)
                : uploadActions.metamaskPaymentSuccess()
            );
          }
        );
      })
    );

export default combineEpics(
  streamUploadEpic,
  streamUploadProgressEpic,
  metamaskEpic
);
