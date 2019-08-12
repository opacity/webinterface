import { from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, flatMap, catchError, map } from "rxjs/operators";
import { toast } from "react-toastify";

import removeActions from "../actions/remove-actions";

const removeFilesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(removeActions.REMOVE_FILES),
    flatMap(({ payload }) => {
      const { files, masterHandle, folder } = payload;
      return files.map(({ version, name }) =>
        removeActions.removeFileByVersion({
          name,
          version,
          masterHandle,
          folder
        })
      );
    })
  );

const removeFileByVersionEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(removeActions.REMOVE_FILE_BY_VERSION),
    mergeMap(({ payload }) => {
      const { name, version, folder, masterHandle } = payload;

      return from(masterHandle.deleteVersion(folder, version)).pipe(
        map(() => {
          toast(`${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: version.handle
          });

          return removeActions.removeFileSuccess({
            masterHandle,
            folder,
            version
          });
        }),
        catchError(error => of(removeActions.removeFileError({ error })))
      );
    })
  );

export default combineEpics(removeFilesEpic, removeFileByVersionEpic);
