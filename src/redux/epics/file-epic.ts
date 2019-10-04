import { Observable, from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, catchError, map, flatMap } from "rxjs/operators";
import { toast } from "react-toastify";
import { Download } from "opaque";
import * as FileSaver from "file-saver";

import { API } from "../../config";

import fileActions from "../actions/file-actions";

const renameFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.RENAME_FILE),
    mergeMap(({ payload }) => {
      const { file, name, folder, masterHandle } = payload;

      return from(masterHandle.renameFile(folder, { file, name })).pipe(
        map(() => {
          toast(`${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return fileActions.renameFileSuccess({ masterHandle, folder });
        }),
        catchError(error => of(fileActions.renameFileFailure({ error })))
      );
    })
  );

const moveFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.MOVE_FILE),
    mergeMap(({ payload }) => {
      const { file, to, folder, masterHandle } = payload;
      const path = folder === "/" ? `/${to}` : `${folder}/${to}`;

      return from(masterHandle.moveFile(folder, { file, to: path })).pipe(
        map(() => {
          toast(`${name} was successfully moved.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: name
          });

          return fileActions.moveFileSuccess({ masterHandle, file });
        }),
        catchError(error => of(fileActions.moveFileFailure({ error })))
      );
    })
  );

const removeFilesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.REMOVE_FILES),
    flatMap(({ payload }) => {
      const { files, masterHandle, directory } = payload;
      return files.map(({ version, name }) =>
      fileActions.removeFileByVersion({
        name,
        version,
        masterHandle,
        directory
      })
      );
    })
  );

const removeFileByVersionEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.REMOVE_FILE_BY_VERSION),
    mergeMap(({ payload }) => {
      const { name, version, directory, masterHandle } = payload;

      return from(masterHandle.deleteVersion(directory, version)).pipe(
        map(() => {
          toast(`${name} was successfully deleted.`, {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: version.handle
          });

          return fileActions.removeFileSuccess({
            masterHandle,
            directory,
            version
          });
        }),
        catchError(error => of(fileActions.removeFileError({ error })))
      );
    })
  );

const downloadFilesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.DOWNLOAD_FILES),
    flatMap(({ payload }) => {
      const { files } = payload;
      return files.map(({ handle }) =>
      fileActions.downloadFile({ handle })
      );
    })
  );

const downloadFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.DOWNLOAD_FILE),
    mergeMap(({ payload }) => {
      const { handle } = payload;

      return new Observable(o => {
        const download = new Download(handle, {
          endpoint: API.STORAGE_NODE
        });

        download
          .metadata()
          .then(({ name: filename }) => {
            toast(`${filename} is downloading. Please wait...`, {
              autoClose: false,
              position: toast.POSITION.BOTTOM_RIGHT,
              toastId: handle
            });

            download.on("download-progress", event => {
              toast.update(handle, {
                render: `${filename} download progress: ${Math.round(
                  event.progress * 100.0
                )}%`,
                progress: event.progress
              });
            });

            download
              .toFile()
              .then(file => {
                const f = file as File;
                FileSaver.saveAs(f);

                toast.update(handle, {
                  render: `${filename} has finished downloading.`,
                  progress: 1
                });
                setTimeout(() => {
                  toast.dismiss(handle);
                }, 3000);

                o.next(fileActions.downloadSuccess({ handle }));
                o.complete();
              })
              .catch(error => {
                o.next(fileActions.downloadError({ error }));
                o.complete();
              });
          })
          .catch(error => {
            o.next(fileActions.downloadError({ error }));
            o.complete();
          });
      });
    })
  );

export default combineEpics(renameFileEpic, moveFileEpic, removeFilesEpic, removeFileByVersionEpic, downloadFilesEpic, downloadFileEpic);
