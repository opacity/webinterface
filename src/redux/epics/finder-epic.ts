import { Observable, from, of } from "rxjs";
import { map, flatMap, switchMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import finderActions from "../actions/finder-actions";
import authenticationActions from "../actions/authentication-actions";

const getFileListEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(finderActions.GET_FILE_LIST),
    switchMap(({ payload }) => {
      const { masterHandle, folder } = payload;

      return from(masterHandle.getFolderMeta(folder)).pipe(
        flatMap((data: any) => [
          finderActions.setList({
            files: data.files,
            folders: data.folders,
            masterHandle
          }),
          finderActions.listenForUpdates({ masterHandle, folder })
        ]),
        catchError(() => [
          finderActions.setList({
            files: [],
            folders: [],
            masterHandle
          }),
          finderActions.listenForUpdates({ masterHandle, folder })
        ])
      );
    })
  );

const listenToUpdatesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(finderActions.LISTEN_FOR_UPDATES),
    switchMap(({ payload }) => {
      const { masterHandle, folder } = payload;

      return new Observable(o => {
        masterHandle.metaQueue[folder].on("update", (data: any) => {
          o.next(
            finderActions.setList({
              files: data.files,
              folders: data.folders,
              masterHandle
            })
          );
        });
      });
    })
  );

const getAccountDataEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(finderActions.SET_LIST),
    switchMap(({ payload }) => {
      const { masterHandle } = payload;

      return from(masterHandle.getAccountInfo()).pipe(
        map((data: any) =>
          authenticationActions.fetchAccountDataSuccess({
            storageUsed: data.storageUsed,
            storageLimit: data.storageLimit,
            expirationDate: data.expirationDate
          })
        ),
        catchError(error =>
          of(authenticationActions.fetchAccountDataFailure({ error }))
        )
      );
    })
  );

export default combineEpics(
  getFileListEpic,
  listenToUpdatesEpic,
  getAccountDataEpic
);
