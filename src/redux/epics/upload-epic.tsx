import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";

import uploadActions from "../actions/upload-actions";

const streamUploadEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(uploadActions.UPLOAD),
    mergeMap(({ payload }) => {
      const { file, accountId } = payload;

      const f = { name: file.name, data: Buffer.from(file) };
      const upload = new Upload(f, accountId, {});

      return new Observable(o => {
        o.next(uploadActions.streamUploadSuccess());
      });
    })
  );

export default combineEpics(streamUploadEpic);
