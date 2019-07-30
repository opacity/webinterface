import { from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, catchError, map } from "rxjs/operators";
import { toast } from "react-toastify";

import renameActions from "../actions/rename-actions";

const renameFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(renameActions.RENAME_FILE),
    mergeMap(({ payload }) => {
      const { name, newName, folder, masterHandle } = payload;

      return from(masterHandle.renameFile(folder, { name, newName })).pipe(
        map(() => {
          toast(`${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return renameActions.renameFileSuccess({ masterHandle, folder });
        }),
        catchError(error => of(renameActions.renameFileError({ error })))
      );
    })
  );

export default combineEpics(renameFileEpic);
