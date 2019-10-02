import { from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, catchError, map } from "rxjs/operators";
import { toast } from "react-toastify";

import fileActions from "../actions/file-actions";

const renameFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.RENAME_FILE),
    mergeMap(({ payload }) => {
      const { file, name, folder, masterHandle } = payload;

      return from(masterHandle.renameFile(folder, { file, name })).pipe(
        map(() => {
          toast(`${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return fileActions.renameFileSuccess({ masterHandle, folder });
        }),
        catchError(error => of(fileActions.renameFileFailure({ error })))
      );
    })
  );

const moveFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.MOVE_FILE),
    mergeMap(({ payload }) => {
      const { file, to, folder, masterHandle } = payload;
      const path = folder === "/" ? `/${to}` : `${folder}/${to}`;

      return from(masterHandle.moveFile(folder, { file, to: path })).pipe(
        map(() => {
          toast(`${name} was successfully moved.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return fileActions.moveFileSuccess({ masterHandle, file });
        }),
        catchError(error => of(fileActions.moveFileFailure({ error })))
      );
    })
  );

export default combineEpics(renameFileEpic, moveFileEpic);
