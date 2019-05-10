import { Observable, from, of } from "rxjs";
import { map, mergeMap, flatMap, catchError } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";
import { toast } from "react-toastify";
import { Upload } from "opaque";

import uploadActions from "../actions/upload-actions";

import * as Backend from "../../services/backend";
// import * as Metadata from "../../services/metadata";

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
        toast(`${file.name} is being uploaded...`, {
          autoClose: false,
          position: toast.POSITION.BOTTOM_RIGHT,
          toastId: handle
        });

        upload.on("upload-progress", event => {
          toast.update(handle, {
            render: `${file.name} progress: ${Math.round(
              event.progress * 100.0
            )}%`,
            progress: event.progress
          });
          o.next(
            uploadActions.uploadProgress({ handle, progress: event.progress })
          );
        });

        upload.on("finish", () => {
          toast.update(handle, {
            render: `${file.name} has finished uploading.`,
            progress: 1
          });
          setTimeout(() => {
            toast.dismiss(handle);
          }, 3000);

          o.next(uploadActions.uploadSuccess({ handle }));
          o.complete();
        });

        upload.on("error", error => {
          toast.update(handle, {
            render: `An error occurred while uploading ${file.name}.`,
            type: toast.TYPE.ERROR,
            progress: 1
          });
          setTimeout(() => {
            toast.dismiss(handle);
          }, 3000);

          o.next(uploadActions.uploadError({ error }));
          o.complete();
        });
      });
    })
  );

const updateMetadataEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(uploadActions.UPLOAD_SUCCESS),
    mergeMap(({ payload }) => {
      const { handle, filename, size, createdAt } = payload;

      // const { metadataKey, metadata } = state$.value.authentication;
      const { metadataKey } = state$.value.authentication;

      // const decryptedMetadata = Metadata.decrypt(metadata);
      const decryptedMetadata = {
        files: []
      };

      const newMetadata = {
        ...decryptedMetadata,
        files: [
          ...decryptedMetadata.files,
          { handle, filename, size, createdAt }
        ]
      };

      return from(
        Backend.updateMetadata({ metadataKey, metadata: newMetadata })
      ).pipe(
        map(({ metadata }) =>
          uploadActions.updateMetadataSuccess({ metadata })
        ),
        catchError(error => of(uploadActions.updateMetadataFailure({ error })))
      );
    })
  );

export default combineEpics(
  uploadFilesEpic,
  uploadFileEpic,
  updateMetadataEpic
);
