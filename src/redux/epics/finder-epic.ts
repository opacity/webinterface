import { from, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import finderActions from "../actions/finder-actions";
import authenticationActions from "../actions/authentication-actions";
import uploadActions from "../actions/upload-actions";
import folderActions from "../actions/folder-actions";

const getFileListEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(
      finderActions.GET_FILE_LIST,
      folderActions.CREATE_FOLDER_SUCCESS,
      folderActions.REMOVE_FOLDER_SUCCESS,
      uploadActions.UPLOAD_SUCCESS
    ),
    switchMap(({ payload }) => {
      const { masterHandle, folder } = payload;

      return from(masterHandle.getFolderMeta(folder)).pipe(
        map((data: any) =>
          finderActions.setList({
            files: data.files,
            folders: data.folders,
            masterHandle
          })
        ),
        catchError(() =>
          of(finderActions.setList({ files: [], folders: [], masterHandle }))
        )
      );
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

export default combineEpics(getFileListEpic, getAccountDataEpic);
