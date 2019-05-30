import { from, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import filesActions from "../actions/files-actions";
import uploadActions from "../actions/upload-actions";
import removeActions from "../actions/remove-actions";

const getFileListEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(
      filesActions.GET_FILE_LIST,
      uploadActions.UPLOAD_SUCCESS,
      removeActions.REMOVE_SUCCESS
    ),
    switchMap(({ payload }) => {
      const { masterHandle } = payload;

      return from(masterHandle.getFolderMeta("/")).pipe(
        map((data: any) => filesActions.setList({ list: data.files })),
        catchError(error => {
          console.log("ERROR: ", error);
          return of(filesActions.setList({ list: [] }));
        })
      );
    })
  );

export default combineEpics(getFileListEpic);
