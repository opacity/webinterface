import { from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, catchError, map } from "rxjs/operators";

import removeActions from "../actions/remove-actions";

const removeByNameEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(removeActions.REMOVE_FILE_BY_NAME),
    mergeMap(({ payload }) => {
      const { name, masterHandle } = payload;

      return from(masterHandle.delete("/", name)).pipe(
        map(() => removeActions.removeSuccess({ masterHandle })),
        catchError(err => of(removeActions.removeError({ err })))
      );
    })
  );

export default combineEpics(removeByNameEpic);
