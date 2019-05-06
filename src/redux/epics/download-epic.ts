import { Observable } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import downloadActions from "../actions/download-actions";

const streamDownloadEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(downloadActions.DOWNLOAD),
    mergeMap(({ payload }) => {
      const { handle } = payload;

      // const download = new Download(handle, {
      //   endpoint: "<brokerIP>"
      // });

      // download.on("download-progress", (event) => {
      //   console.log("PROGRESS", event.progress); // 0 - 1, not %
      // });

      // const data = await download.toBuffer();

      return new Observable(o => {
        o.next(downloadActions.streamDownloadSuccess({ handle: handle }));
      });
    })
  );

export default combineEpics(streamDownloadEpic);
