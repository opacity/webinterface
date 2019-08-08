import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { push } from "connected-react-router";
import { EventEmitter } from "events";

import finderActions from "../actions/finder-actions";
import finderEpic from "./finder-epic";

test("getFileListEpic finderActions.GET_FILE_LIST - grabs initial list ", done => {
  const files = ["fi1", "fi2"];
  const folders = ["fo1", "fo2"];
  const folderUpdates = new EventEmitter();

  const folder = "fo1";
  const masterHandle = {
    getFolderMeta: jest.fn(() => Promise.resolve({ files, folders })),
    metaQueue: {
      [folder]: folderUpdates
    }
  };
  const action$ = of(finderActions.getFileList({ masterHandle, folder }));
  const state$ = null;
  const dependencies$ = {};

  finderEpic(action$, state$, dependencies$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual([
        finderActions.setList({ files, folders, masterHandle }),
        finderActions.listenForUpdates({ masterHandle, folder })
      ]);
      done();
    });
});

test("getFileListEpic finderActions.LISTEN_FOR_UPDATES", done => {
  const folderUpdates = new EventEmitter();

  const folder = "fo1";
  const masterHandle = {
    metaQueue: {
      [folder]: folderUpdates
    }
  };
  const action$ = of(finderActions.listenForUpdates({ masterHandle, folder }));

  const updatedFiles = ["fi3", "fi4"];
  const updatedFolders = ["fo3", "fo4"];

  finderEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      finderActions.setList({
        files: updatedFiles,
        folders: updatedFolders,
        masterHandle
      })
    );
    done();
  });

  folderUpdates.emit("update", {
    files: updatedFiles,
    folders: updatedFolders
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

  finderEpic(action$, state$, dependencies$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual([
        finderActions.setList({ files: [], folders: [], masterHandle }),
        finderActions.listenForUpdates({ masterHandle, folder })
      ]);
      done();
    });
});
