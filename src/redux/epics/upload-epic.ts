import { Observable } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import uploadActions from "../actions/upload-actions";

const streamUploadEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(uploadActions.UPLOAD),
    mergeMap(({ payload }) => {
      // const { file, accountId } = payload;

      // const f = { name: file.name, data: Buffer.from(file) };
      // const upload = new Upload(f, accountId, {});

      return new Observable(o => {
        o.next(uploadActions.streamUploadSuccess({ handle: "TODO" }));
      });
    })
  );

export default combineEpics(streamUploadEpic);
