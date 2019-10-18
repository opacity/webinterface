import { from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, catchError, map } from "rxjs/operators";
import { toast } from "react-toastify";

import folderActions from "../actions/folder-actions";

const createFolderEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(folderActions.CREATE_FOLDER),
    mergeMap(({ payload }) => {
      const { name, directory, masterHandle } = payload;

      return from(masterHandle.createFolder(directory, name)).pipe(
        map(f => {
          toast(`Folder ${name} was successfully created.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return folderActions.createFolderSuccess({ masterHandle, directory });
        }),
        catchError(error => of(folderActions.createFolderFailure({ error })))
      );
    })
  );

const removeFolderEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(folderActions.REMOVE_FOLDER),
    mergeMap(({ payload }) => {
      const { folder, name, directory, masterHandle } = payload;

      return from(masterHandle.deleteFolder(directory, folder)).pipe(
        map(() => {
          toast(`Folder ${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return folderActions.removeFolderSuccess({ masterHandle, directory });
        }),
        catchError(error => of(folderActions.removeFolderFailure({ error })))
      );
    })
  );

const renameFolderEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(folderActions.RENAME_FOLDER),
    mergeMap(({ payload }) => {
      const { directory, folder, name, masterHandle } = payload;

      return from(masterHandle.renameFolder(directory, { folder, name })).pipe(
        map(() => {
          toast(`Folder ${name} was successfully renamed.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return folderActions.renameFolderSuccess({
            masterHandle,
            directory
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
      const { to, folder, directory, masterHandle } = payload;
      const path = directory === "/" ? `/${to}` : `${directory}/${to}`;

      return from(masterHandle.moveFolder(directory, { folder, to: path })).pipe(
        map(() => {
          toast(`Folder ${name} was successfully moved.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return folderActions.moveFolderSuccess({
            masterHandle,
            directory
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
