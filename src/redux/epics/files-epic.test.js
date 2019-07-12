import { of } from "rxjs";
import { push } from "connected-react-router";

import filesActions from "../actions/files-actions";
import uploadActions from "../actions/upload-actions";
import removeActions from "../actions/remove-actions";
import filesEpic from "./files-epic";

test("getFileListEpic filesActions.GET_FILE_LIST", done => {
  const files = ["foo", "bar"];
  const folders = ["foo", "bar"];
  const masterHandle = {
    getFolderMeta: jest.fn(() => Promise.resolve({ files, folders })),
    getAccountInfo: jest.fn(() =>
      Promise.resolve({
        storageUsed: 123,
        storageLimit: 456,
        expirationDate: new Date()
      })
    )
  };
  const action$ = of(filesActions.getFileList({ masterHandle }));
  const state$ = null;
  const dependencies$ = {};

  filesEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(filesActions.setList({ list: files, folders }));
    done();
  });
});

test("getFileListEpic uploadActions.UPLOAD_SUCCESS", done => {
  const files = ["foo", "bar"];
  const folders = ["foo", "bar"];
  const masterHandle = {
    getFolderMeta: jest.fn(() => Promise.resolve({ files, folders })),
    getAccountInfo: jest.fn(() =>
      Promise.resolve({
        storageUsed: 123,
        storageLimit: 456,
        expirationDate: new Date()
      })
    )
  };
  const action$ = of(uploadActions.uploadSuccess({ masterHandle }));
  const state$ = null;
  const dependencies$ = {};

  filesEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(filesActions.setList({ list: files, folders }));
    done();
  });
});

test("getFileListEpic removeActions.REMOVE_SUCCESS", done => {
  const files = ["foo", "bar"];
  const folders = ["foo", "bar"];
  const masterHandle = {
    getFolderMeta: jest.fn(() => Promise.resolve({ files, folders })),
    getAccountInfo: jest.fn(() =>
      Promise.resolve({
        storageUsed: 123,
        storageLimit: 456,
        expirationDate: new Date()
      })
    )
  };
  const action$ = of(removeActions.removeSuccess({ masterHandle }));
  const state$ = null;
  const dependencies$ = {};

  filesEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(filesActions.setList({ list: files, folders }));
    done();
  });
});

test("getFileListEpic - on failure", done => {
  const files = ["foo", "bar"];
  const masterHandle = {
    getFolderMeta: jest.fn(() => Promise.reject("foobar")),
    getAccountInfo: jest.fn(() =>
      Promise.resolve({
        storageUsed: 123,
        storageLimit: 456,
        expirationDate: new Date()
      })
    )
  };
  const action$ = of(filesActions.getFileList({ masterHandle }));
  const state$ = null;
  const dependencies$ = {};

  filesEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(filesActions.setList({ list: [], folders: [] }));
    done();
  });
});
