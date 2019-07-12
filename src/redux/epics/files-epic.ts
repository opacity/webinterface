import { from, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import filesActions from "../actions/files-actions";
import authenticationActions from "../actions/authentication-actions";
import uploadActions from "../actions/upload-actions";
import removeActions from "../actions/remove-actions";

const getFileListEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(
      filesActions.GET_FILE_LIST,
      uploadActions.UPLOAD_SUCCESS,
      removeActions.REMOVE_SUCCESS
    ),
    switchMap(({ payload }) => {
      const { masterHandle } = payload;

      return from(masterHandle.getFolderMeta("/")).pipe(
        map((data: any) =>
          filesActions.setList({ list: data.files, folders: data.folders })
        ),
        catchError(() => of(filesActions.setList({ list: [], folders: [] })))
      );
    })
  );

const getAccountDataEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(
      filesActions.GET_FILE_LIST,
      uploadActions.UPLOAD_SUCCESS,
      removeActions.REMOVE_SUCCESS
    ),
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

export default combineEpics(getFileListEpic, getAccountDataEpic);
