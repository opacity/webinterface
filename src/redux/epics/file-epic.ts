import { Observable, from, of } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { mergeMap, catchError, map, flatMap } from "rxjs/operators";
import { toast } from "react-toastify";
import { MasterHandle, Account } from "opaque";
import streamsaver from "streamsaver";

import { API } from "../../config";

import fileActions from "../actions/file-actions";

const renameFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.RENAME_FILE),
    mergeMap(({ payload }) => {
      const { file, name, folder, masterHandle } = payload;

      return from(masterHandle.renameFile(folder, { file, name })).pipe(
        map(() => {
          toast(`${name} was renamed successfully.`, {
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
          toast("File was moved successfully.", {
            autoClose: 3000,
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: file.name
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
          toast(`${name} was deleted successfully.`, {
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
        const mh = new MasterHandle({ account: new Account() }, {
          downloadOpts: {
            endpoint: API.STORAGE_NODE
          }
        });

        const download = mh.downloadFile(handle);

        download
          .metadata()
          .then(({ name: filename, size: filesize }) => {
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

            download.on("finish", () => {
              toast.update(handle, {
                render: `${filename} has finished downloading.`,
                progress: 1
              });
              setTimeout(() => {
                toast.dismiss(handle);
              }, 3000);

              o.next(fileActions.downloadSuccess({ handle }));
              o.complete();
            });

            streamsaver.mitm = "/public/streamsaver/mitm.html";

            const downloader = streamsaver.createWriteStream(filename, { size: filesize });

            window.addEventListener("unload", () => {
              downloader.abort().catch(err => { throw err; });
            });

            download.stream().then(async stream => {
              // more optimized
              if ("WritableStream" in window && stream.pipeTo) {
                stream.pipeTo(downloader)
                  .then(() => {
                    console.log("done writing");
                    o.complete();
                  });
              } else {
                const writer = downloader.getWriter();
                const reader = stream.getReader();

                const pump = async () => {
                  const res = await reader.read().catch(err => {
                    o.next(fileActions.downloadError({ err }));
                    o.complete();
                  });

                  if (!res || !res.done) {
                    writer.close().catch(err => { throw err; });
                    o.complete();
                  } else {
                    writer.write(res.value).then(pump).catch(err => { throw err; });
                  }
                };

                pump().catch(err => { throw err; });
              }
            })
              .catch(err => {
                o.next(fileActions.downloadError({ err }));
                o.complete();
              });
          })
          .catch(err => {
            o.next(fileActions.downloadError({ err }));
            o.complete();
          });
      });
    })
  );

const relativePath = path => path.substr(0, path.lastIndexOf("/"));

const uploadFilesEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.UPLOAD_FILES),
    flatMap(({ payload }) => {
      const { files, directory, masterHandle } = payload;

      return files.map(file =>
        // Current path or subdirectory
        (file.name === (file.path || file.webkitRelativePath || file.name))
          ? fileActions.uploadFile({ file, directory, masterHandle })
          : fileActions.uploadFile({
            file,
            directory:
                directory === "/"
                  ? file.webkitRelativePath ? directory + relativePath(file.webkitRelativePath) : relativePath(file.path)
                  : file.webkitRelativePath ? directory + "/" + relativePath(file.webkitRelativePath) : directory + relativePath(file.path),
            masterHandle
          })
      );
    })
  );

const uploadFileEpic = (action$, state$, dependencies$) =>
  action$.pipe(
    ofType(fileActions.UPLOAD_FILE),
    mergeMap(({ payload }: { payload: { file: File, directory: string, masterHandle: MasterHandle } }) => {
      const { file, directory, masterHandle } = payload;

      return new Observable(o => {
        masterHandle.uploadFile(directory, file).then(upload => {
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
              fileActions.uploadSuccess({
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
              fileActions.uploadError({ handle, filename: file.name, error })
            );
            o.complete();
          });
        }).catch(err => { throw err; });
      });
    })
  );

export default combineEpics(renameFileEpic, moveFileEpic, removeFilesEpic, removeFileByVersionEpic, downloadFilesEpic, downloadFileEpic, uploadFilesEpic, uploadFileEpic);
