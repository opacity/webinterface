import { Observable } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, flatMap } from "rxjs/operators";
import { Download } from "opaque";
import * as FileSaver from "file-saver";
import { toast } from "react-toastify";

import downloadActions from "../actions/download-actions";
import { API } from "../../config";

const downloadFilesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(downloadActions.DOWNLOAD_FILES),
    flatMap(({ payload }) => {
      const { files } = payload;
      return files.map(handle => downloadActions.downloadFile({ handle }));
    })
  );

const downloadEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(downloadActions.DOWNLOAD_FILE),
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

                o.next(downloadActions.downloadSuccess({ handle }));
                o.complete();
              })
              .catch(error => {
                o.next(downloadActions.downloadError({ error }));
                o.complete();
              });
          })
          .catch(error => {
            o.next(downloadActions.downloadError({ error }));
            o.complete();
          });
      });
    })
  );

export default combineEpics(downloadEpic, downloadFilesEpic);
