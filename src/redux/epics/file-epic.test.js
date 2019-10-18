import { of } from "rxjs";
import "rxjs/add/operator/toArray";
import { MasterHandle, Download } from "opaque";

import { EventEmitter } from "events";

import fileActions from "../actions/file-actions";
import fileEpic from "./file-epic";

jest.mock("opaque", () => ({
  MasterHandle: jest.fn(),
  Download: jest.fn()
}));

jest.mock("file-saver", () => ({
  saveAs: jest.fn()
}));

const download = new EventEmitter();
download.metadata = jest.fn().mockResolvedValue({ name: "f1" });
download.toFile = jest.fn().mockResolvedValue(new File([""], "foobar"));

Download.mockImplementation(() => download);

test("downloadFilesEpic", done => {
  const files = [{ handle: "foo" }, { handle: "bar" }];

  const action$ = of(fileActions.downloadFiles({ files }));
  const expected = files.map(({ handle }) =>
  fileActions.downloadFile({ handle })
  );

  fileEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual(expected);
      done();
    });
});

test("downloadFileEpic on success", done => {
  const handle = "h1";

  const action$ = of(fileActions.downloadFile({ handle }));

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(fileActions.downloadSuccess({ handle }));
    done();
  });
});

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

test("uploadFilesEpic", done => {
  const files = ["foo", "bar"];
  const masterHandle = "m1";
  const directory = "/";

  const action$ = of(
    fileActions.uploadFiles({ files, directory, masterHandle })
  );
  const expected = files.map(file =>
    fileActions.uploadFile({ file, directory, masterHandle })
  );

  fileEpic(action$)
    .toArray()
    .subscribe(actions => {
      expect(actions).toEqual(expected);
      done();
    });
});

test("uploadFileEpic on success", done => {
  const file = { name: "f1" };
  const directory = "/";
  const upload = new EventEmitter();
  upload.handle = "h1";

  const masterHandle = {
    uploadFile: jest.fn(() => upload)
  };

  const action$ = of(
    fileActions.uploadFile({ file, directory, masterHandle })
  );

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      fileActions.uploadSuccess({ masterHandle, directory })
    );
    done();
  });

  upload.emit("finish");
});

test("uploadFileEpic on failure", done => {
  const file = { name: "f1" };
  const upload = new EventEmitter();
  const directory = "/";
  upload.handle = "h1";
  const error = new Error("foobar");

  const masterHandle = {
    uploadFile: jest.fn(() => upload)
  };

  const action$ = of(
    fileActions.uploadFile({ file, directory, masterHandle })
  );

  fileEpic(action$).subscribe(actions => {
    expect(actions).toEqual(
      fileActions.uploadError({ handle: "h1", filename: "f1", error })
    );
    done();
  });

  upload.emit("error", error);
});
