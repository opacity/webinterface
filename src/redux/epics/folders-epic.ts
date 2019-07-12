import { from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, catchError, map } from "rxjs/operators";
import { toast } from "react-toastify";

import foldersActions from "../actions/folders-actions";

const createFolderEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(foldersActions.CREATE_FOLDER),
    mergeMap(({ payload }) => {
      const { name, folder, masterHandle } = payload;

      return from(masterHandle.removeFolder(folder, name)).pipe(
        map(() => {
          toast(`Folder ${name} was successfully created.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return foldersActions.removeFolderSuccess({ masterHandle });
        }),
        catchError(error => of(foldersActions.removeFolderError({ error })))
      );
    })
  );

const removeFolderEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(foldersActions.REMOVE_FOLDER),
    mergeMap(({ payload }) => {
      const { name, folder, masterHandle } = payload;

      return from(masterHandle.removeFolder(folder, name)).pipe(
        map(() => {
          toast(`Folder ${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return foldersActions.removeFolderSuccess({ masterHandle });
        }),
        catchError(error => of(foldersActions.removeFolderError({ error })))
      );
    })
  );

export default combineEpics(createFolderEpic, removeFolderEpic);
