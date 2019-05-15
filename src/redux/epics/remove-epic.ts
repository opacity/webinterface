import { Observable } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import removeActions from "../actions/remove-actions";

const removeEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(removeActions.REMOVE_FILE),
    mergeMap(({ payload }) => {
      const { handle } = payload;

      // const remove = new Remove(handle, {
      //   endpoint: "<brokerIP>"
      // });

      // remove.on("remove-progress", (event) => {
      //   console.log("PROGRESS", event.progress); // 0 - 1, not %
      // });

      return new Observable(o => {
        o.next(removeActions.removeSuccess({ handle: handle }));
      });
    })
  );

export default combineEpics(removeEpic);
