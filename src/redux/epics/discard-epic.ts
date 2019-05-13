import { Observable } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import discardActions from "../actions/discard-actions";

const streamDiscardEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(discardActions.DISCARD),
    mergeMap(({ payload }) => {
      const { handle } = payload;

      // const discard = new Discard(handle, {
      //   endpoint: "<brokerIP>"
      // });

      // discard.on("discard-progress", (event) => {
      //   console.log("PROGRESS", event.progress); // 0 - 1, not %
      // });

      // const data = await discard.toBuffer();

      return new Observable(o => {
        o.next(discardActions.streamDiscardSuccess({ handle: handle }));
      });
    })
  );

export default combineEpics(streamDiscardEpic);
