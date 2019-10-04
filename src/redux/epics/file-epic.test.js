import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { MasterHandle } from "opaque";

import fileActions from "../actions/file-actions";
import fileEpic from "./file-epic";

jest.mock("opaque", () => ({
  MasterHandle: jest.fn()
}));

test("renameFile on success", done => {
  const name = "n1";
  const folder = "/";
  const to = "/";
  const masterHandle = {
    renameFile: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    fileActions.renameFile({ name, to, folder, masterHandle })
  );

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      fileActions.renameFileSuccess({ masterHandle, folder })
    );
    done();
  });
});

test("moveFile on success", done => {
  const folder = "n1";
  const file = "/";
  const to = "/";
  const masterHandle = {
    moveFile: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    fileActions.moveFile({ file, to, folder, masterHandle })
  );

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      fileActions.moveFileSuccess({ masterHandle, file })
    );
    done();
  });
});

test("removeFileByVersionEpic on success", done => {
  const name = "n1";
  const version = { handle: "h1" };
  const directory = "/";
  const masterHandle = {
    deleteVersion: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    fileActions.removeFileByVersion({
      name,
      version,
      directory,
      masterHandle
    })
  );

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      fileActions.removeFileSuccess({ masterHandle, directory, version })
    );
    done();
  });
});

test("removeFileByVersionEpic on failure", done => {
  const name = "n1";
  const version = { handle: "h1" };
  const directory = "/";
  const error = new Error("foobar");
  const masterHandle = {
    deleteVersion: jest.fn().mockRejectedValue(error)
  };

  const action$ = of(
    fileActions.removeFileByVersion({
      name,
      version,
      directory,
      masterHandle
    })
  );

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(fileActions.removeFileError({ error }));
    done();
  });
});

test("removeFilesEpic", done => {
  const files = [
    { version: { handle: "h1" }, name: "n1" },
    { version: { handle: "h2" }, name: "n2" }
  ];
  const directory = "/";
  const masterHandle = {
    deleteVersion: jest.fn().mockResolvedValue(true)
  };

  const action$ = of(
    fileActions.removeFiles({ files, masterHandle, directory })
  );
  const expected = files.map(({ name, version }) =>
  fileActions.removeFileByVersion({
      name,
      version,
      masterHandle,
      directory
    })
  );

  fileEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual(expected);
      done();
    });
});

