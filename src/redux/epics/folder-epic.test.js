import { of } from "rxjs";

import folderActions from "../actions/folder-actions";
import folderEpic from "./folder-epic";

test("createFolderEpic on success", done => {
  const name = "name";
  const directory = "/";

  const masterHandle = {
    createFolder: jest.fn(() => Promise.resolve())
  };

  const action$ = of(
    folderActions.createFolder({ masterHandle, directory, name })
  );

  folderEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      folderActions.createFolderSuccess({ masterHandle, directory })
    );
    done();
  });
});

test("removeFolderEpic on success", done => {
  const folder = { name: "fo1", location: "l1" };
  const name = "name";
  const directory = "/";

  const masterHandle = {
    deleteFolder: jest.fn(() => Promise.resolve())
  };

  const action$ = of(
    folderActions.removeFolder({ masterHandle, directory, name, folder })
  );

  folderEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      folderActions.removeFolderSuccess({ masterHandle, directory })
    );
    done();
  });
});

test("renameFolder on success", done => {
  const name = "name";
  const folder = "/";
  const newName = "/";

  const masterHandle = {
    renameFolder: jest.fn(() => Promise.resolve())
  };

  const action$ = of(
    folderActions.renameFolder({ masterHandle, folder, name, newName })
  );

  folderEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      folderActions.renameFolderSuccess({ masterHandle, folder })
    );
    done();
  });
});

test("moveFolder on success", done => {
  const currentFolder = "name";
  const folder = "/";
  const to = "/";

  const masterHandle = {
    moveFolder: jest.fn(() => Promise.resolve())
  };

  const action$ = of(
    folderActions.moveFolder({ masterHandle, folder, currentFolder, to })
  );

  folderEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      folderActions.moveFolderSuccess({ masterHandle, folder })
    );
    done();
  });
});
