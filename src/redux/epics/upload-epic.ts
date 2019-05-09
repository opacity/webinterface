import { Observable } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, flatMap } from "rxjs/operators";

import uploadActions from "../actions/upload-actions";

import { Upload } from "opaque";

const uploadFilesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(uploadActions.UPLOAD_FILES),
    flatMap(({ payload }) => {
      const { files, accountId } = payload;

      return files.map(file => uploadActions.uploadFile({ file, accountId }));
    })
  );

const uploadFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(uploadActions.UPLOAD_FILE),
    mergeMap(({ payload }) => {
      const { file, accountId } = payload;

      return new Observable(o => {
        const options = {
          autostart: true,
          endpoint: "http://176.9.147.13:8081",
          params: {
            blockSize: 64 * 1024, // 256 KiB encryption blocks
            partSize: 5 * 1024 * 1024 // 5 MiB data chunks
          }
        };

        const upload = new Upload(file, accountId, options);
        const handle = upload.handle;

        o.next(uploadActions.monitorFile({ handle }));

        upload.on("upload-progress", event => {
          o.next(
            uploadActions.uploadProgress({ handle, progress: event.progress })
          );
        });

        upload.on("finish", event => {
          o.next(uploadActions.uploadSuccess({ handle }));
          o.complete();
        });

        upload.on("error", err => {
          o.next(uploadActions.uploadError({ err }));
          o.complete();
        });
      });
    })
  );
export default combineEpics(uploadFilesEpic, uploadFileEpic);
