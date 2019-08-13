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
      const { name, directory, masterHandle } = payload;

      return from(masterHandle.deleteFolder(directory, name)).pipe(
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

export default combineEpics(createFolderEpic, removeFolderEpic);
