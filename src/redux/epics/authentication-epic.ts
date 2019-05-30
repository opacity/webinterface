import { from, of } from "rxjs";
import { switchMap, flatMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";
import { push } from "connected-react-router";

import authenticationActions from "../actions/authentication-actions";
import * as Account from "../../services/account";
import { API } from "../../config";

import { MasterHandle } from "opaque";

const loginEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(authenticationActions.LOGIN_PENDING),
    switchMap(({ payload }) => {
      const { privateKey, storagePin } = payload;

      const metadataKey = Account.getMetadataKey({ privateKey, storagePin });

      const uploadOpts = {
        autostart: true,
        endpoint: API.STORAGE_NODE,
        params: {
          blockSize: 64 * 1024, // 256 KiB encryption blocks
          partSize: 10 * 1024 * 1024
        }
      };

      const downloadOpts = {
        endpoint: API.STORAGE_NODE
      };
      const masterHandle: MasterHandle = new MasterHandle(
        {
          handle: privateKey
        },
        {
          uploadOpts,
          downloadOpts
        }
      );

      return from(masterHandle.isPaid()).pipe(
        flatMap(isPaid => {
          const accountId = Account.getAccountId({ privateKey, storagePin });
          if (isPaid) {
            return [
              authenticationActions.loginSuccess({
                accountId,
                metadata: {},
                metadataKey,
                masterHandle
              }),
              push("/file-manager")
            ];
          } else {
            return [
              authenticationActions.loginFailure({
                error: new Error(
                  "Please complete your payment before accessing your account"
                )
              })
            ];
          }
        }),
        catchError(error => of(authenticationActions.loginFailure({ error })))
      );
    })
  );

export default combineEpics(loginEpic);
