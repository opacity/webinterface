import { Observable } from "rxjs";
import { mergeMap, flatMap } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";
import { toast } from "react-toastify";

import uploadActions from "../actions/upload-actions";

const relativePath = path => path.substr(0, path.lastIndexOf("/"));

const uploadFilesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(uploadActions.UPLOAD_FILES),
    flatMap(({ payload }) => {

      const { files, folder, masterHandle, isDirectory } = payload;

      return files.map(file =>
        !isDirectory
          ? uploadActions.uploadFile({ file, folder, masterHandle })
          : uploadActions.uploadFile({
            file,
            folder:
                folder === "/"
                  ? folder + relativePath(file.webkitRelativePath)
                  : folder + "/" + relativePath(file.webkitRelativePath),
            masterHandle
          })
    })
  );

const uploadFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(uploadActions.UPLOAD_FILE),
    mergeMap(({ payload }) => {
      const { file, directory, masterHandle } = payload;

      return new Observable(o => {
        const upload = masterHandle.uploadFile(directory, file);
        const handle = upload.handle;

        toast(`${file.name} is uploading. Please wait...`, {
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
        });

        upload.on("finish", () => {
          toast.update(handle, {
            render: `${file.name} has finished uploading.`,
            progress: 1
          });
          setTimeout(() => {
            toast.dismiss(handle);
          }, 3000);

          o.next(
            uploadActions.uploadSuccess({
              masterHandle,
              directory
            })
          );
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

          o.next(
            uploadActions.uploadError({ handle, filename: file.name, error })
          );
          o.complete();
        });
      });
    })
  );

export default combineEpics(uploadFilesEpic, uploadFileEpic);
