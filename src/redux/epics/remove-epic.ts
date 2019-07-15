import { from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, catchError, map } from "rxjs/operators";
import { toast } from "react-toastify";

import removeActions from "../actions/remove-actions";

const removeFileByHandleEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(removeActions.REMOVE_FILE_BY_HANDLE),
    mergeMap(({ payload }) => {
      const { name, handle, folder, masterHandle } = payload;

      return from(masterHandle.deleteVersion(folder, handle)).pipe(
        map(() => {
          toast(`${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: handle
          });

          return removeActions.removeSuccess({ masterHandle, folder });
        }),
        catchError(error => of(removeActions.removeError({ error })))
      );
    })
  );

export default combineEpics(removeFileByHandleEpic);
