import { from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, catchError, map } from "rxjs/operators";
import { toast } from "react-toastify";

import folderActions from "../actions/folder-actions";

const createFolderEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(folderActions.CREATE_FOLDER),
    mergeMap(({ payload }) => {
      const { name, folder, masterHandle } = payload;

      return from(masterHandle.createFolder(folder, name)).pipe(
        map(f => {
          toast(`Folder ${name} was successfully created.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return folderActions.createFolderSuccess({ masterHandle, folder });
        }),
        catchError(error => of(folderActions.createFolderFailure({ error })))
      );
    })
  );

const removeFolderEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(folderActions.REMOVE_FOLDER),
    mergeMap(({ payload }) => {
      const { name, folder, masterHandle } = payload;

      return from(masterHandle.deleteFolder(folder, name)).pipe(
        map(() => {
          toast(`Folder ${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return folderActions.removeFolderSuccess({ masterHandle, folder });
        }),
        catchError(error => of(folderActions.removeFolderFailure({ error })))
      );
    })
  );

const renameFolderEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(folderActions.RENAME_FOLDER),
    mergeMap(({ payload }) => {
      const { name, folder, newName, masterHandle } = payload;

      return from(masterHandle.renameFolder(folder, { name, newName })).pipe(
        map(() => {
          toast(`Folder ${name} was successfully renamed.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return folderActions.renameFolderSuccess({
            masterHandle,
            folder
          });
        }),
        catchError(error => of(folderActions.renameFolderFailure({ error })))
      );
    })
  );

const moveFolderEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(folderActions.MOVE_FOLDER),
    mergeMap(({ payload }) => {
      const { to, folder, currentFolder, masterHandle } = payload;

      return from(masterHandle.moveFolder(currentFolder, { folder, to })).pipe(
        map(() => {
          toast(`Folder ${name} was successfully moved.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return folderActions.moveFolderSuccess({
            masterHandle,
            folder
          });
        }),
        catchError(error => of(folderActions.moveFolderFailure({ error })))
      );
    })
  );

export default combineEpics(
  createFolderEpic,
  removeFolderEpic,
  renameFolderEpic,
  moveFolderEpic
);
