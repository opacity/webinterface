import { of } from "rxjs";

import folderActions from "../actions/folder-actions";
import folderEpic from "./folder-epic";

test("createFolderEpic on success", done => {
  const name = "name";
  const folder = "/";

  const masterHandle = {
    createFolder: jest.fn(() => Promise.resolve())
  };

  const action$ = of(
    folderActions.createFolder({ masterHandle, folder, name })
  );

  folderEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      folderActions.createFolderSuccess({ masterHandle, folder })
    );
    done();
  });
});

test("removeFolderEpic on success", done => {
  const name = "name";
  const folder = "/";

  const masterHandle = {
    deleteFolder: jest.fn(() => Promise.resolve())
  };

  const action$ = of(
    folderActions.removeFolder({ masterHandle, folder, name })
  );

  folderEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      folderActions.removeFolderSuccess({ masterHandle, folder })
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
