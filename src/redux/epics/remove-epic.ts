import { from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, flatMap, catchError, map } from "rxjs/operators";
import { toast } from "react-toastify";

import removeActions from "../actions/remove-actions";

const removeFilesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(removeActions.REMOVE_FILES),
    flatMap(({ payload }) => {
      const { files, masterHandle, directory } = payload;
      return files.map(({ version, name }) =>
        removeActions.removeFileByVersion({
          name,
          version,
          masterHandle,
          directory
        })
      );
    })
  );

const removeFileByVersionEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(removeActions.REMOVE_FILE_BY_VERSION),
    mergeMap(({ payload }) => {
      const { name, version, directory, masterHandle } = payload;

      return from(masterHandle.deleteVersion(directory, version)).pipe(
        map(() => {
          toast(`${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: version.handle
          });

          return removeActions.removeFileSuccess({
            masterHandle,
            directory,
            version
          });
        }),
        catchError(error => of(removeActions.removeFileError({ error })))
      );
    })
  );

export default combineEpics(removeFilesEpic, removeFileByVersionEpic);
