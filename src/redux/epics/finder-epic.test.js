import { of } from "rxjs";
import { push } from "connected-react-router";

import finderActions from "../actions/finder-actions";
import uploadActions from "../actions/upload-actions";
import removeActions from "../actions/remove-actions";

import finderEpic from "./finder-epic";

test("getFileListEpic finderActions.GET_FILE_LIST", done => {
  const files = ["fi1", "fi2"];
  const folders = ["fo1", "fo2"];

  const folder = "fo1";
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
  const action$ = of(finderActions.getFileList({ masterHandle, folder }));
  const state$ = null;
  const dependencies$ = {};

  finderEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(
      finderActions.setList({ files, folders, masterHandle })
    );
    done();
  });
});

test("getFileListEpic uploadActions.UPLOAD_SUCCESS", done => {
  const files = ["fi1", "fi2"];
  const folders = ["fo1", "fo2"];

  const folder = "fo1";
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

  finderEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(
      finderActions.setList({ files, folders, masterHandle })
    );
    done();
  });
});

test("getFileListEpic removeActions.REMOVE_SUCCESS", done => {
  const files = ["fi1", "fi2"];
  const folders = ["fo1", "fo2"];

  const folder = "fo1";
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

  finderEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(
      finderActions.setList({ files, folders, masterHandle })
    );
    done();
  });
});

test("getFileListEpic - on failure", done => {
  const folder = "fo1";
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
  const action$ = of(finderActions.getFileList({ masterHandle, folder }));
  const state$ = null;
  const dependencies$ = {};

  finderEpic(action$, state$, dependencies$).subscribe(actions => {
    expect(actions).toEqual(
      finderActions.setList({ files: [], folders: [], masterHandle })
    );
    done();
  });
});
