// import { Observable } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { flatMap } from "rxjs/operators";

import uploadActions from "../actions/upload-actions";

const uploadFilesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(uploadActions.UPLOAD_FILES),
    flatMap(({ payload }) => {
      const { files, accountId } = payload;

      return files.map(file => uploadActions.uploadFile({ file, accountId }));
    })
  );

export default combineEpics(uploadFilesEpic);
