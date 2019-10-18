import actions from "./file-actions";

test("renameFile", () => {
  const name = "n1";
  const file = "h1";
  const folder = "/";
  const masterHandle = "mh1";
  const expected = {
    type: actions.RENAME_FILE,
    payload: {
      file,
      name,
      folder,
      masterHandle
    }
  };
  expect(actions.renameFile({ name, file, folder, masterHandle })).toEqual(
    expected
  );
});

test("renameFileSuccess", () => {
  const masterHandle = "mh1";
  const folder = "/";
  const expected = {
    type: actions.RENAME_FILE_SUCCESS,
    payload: {
      masterHandle,
      folder
    }
  };
  expect(actions.renameFileSuccess({ masterHandle, folder })).toEqual(expected);
});

test("renameFileFailure", () => {
  const error = "e1";
  const expected = {
    type: actions.RENAME_FILE_FAILURE,
    payload: {
      error
    }
  };
  expect(actions.renameFileFailure({ error })).toEqual(expected);
});

test("moveFile", () => {
  const file = "n1";
  const to = "h1";
  const folder = "/";
  const masterHandle = "mh1";
  const expected = {
    type: actions.MOVE_FILE,
    payload: {
      file,
      to,
      folder,
      masterHandle
    }
  };
  expect(actions.moveFile({ file, to, folder, masterHandle })).toEqual(
    expected
  );
});

test("moveFileSuccess", () => {
  const masterHandle = "mh1";
  const file = "/";
  const expected = {
    type: actions.MOVE_FILE_SUCCESS,
    payload: {
      masterHandle,
      file
    }
  };
  expect(actions.moveFileSuccess({ masterHandle, file })).toEqual(expected);
});

test("moveFileFailure", () => {
  const error = "e1";
  const expected = {
    type: actions.MOVE_FILE_FAILURE,
    payload: {
      error
    }
  };
  expect(actions.moveFileFailure({ error })).toEqual(expected);
});

test("removeFileByVersion", () => {
  const name = "n1";
  const version = { handle: "h1" };
  const directory = "/";
  const masterHandle = "mh1";
  const expected = {
    type: actions.REMOVE_FILE_BY_VERSION,
    payload: {
      name,
      version,
      directory,
      masterHandle
    }
  };
  expect(
    actions.removeFileByVersion({ name, version, directory, masterHandle })
  ).toEqual(expected);
});

test("removeSuccess", () => {
  const masterHandle = "mh1";
  const version = { handle: "h1" };
  const directory = "/";
  const expected = {
    type: actions.REMOVE_FILE_SUCCESS,
    payload: {
      masterHandle,
      directory,
      version
    }
  };
  expect(
    actions.removeFileSuccess({ masterHandle, directory, version })
  ).toEqual(expected);
});

test("removeError", () => {
  const error = "e1";
  const expected = {
    type: actions.REMOVE_FILE_ERROR,
    payload: {
      error
    }
  };
  expect(actions.removeFileError({ error })).toEqual(expected);
});

test("removeFiles", () => {
  const files = "files";
  const expected = {
    type: actions.REMOVE_FILES,
    payload: {
      files
    }
  };
  expect(actions.removeFiles({ files })).toEqual(expected);
});


test("downloadFile", () => {
  const handle = "h1";
  const expected = {
    type: actions.DOWNLOAD_FILE,
    payload: {
      handle
    }
  };
  expect(actions.downloadFile({ handle })).toEqual(expected);
});

test("downloadSuccess", () => {
  const handle = "h1";
  const expected = {
    type: actions.DOWNLOAD_SUCCESS,
    payload: {
      handle
    }
  };
  expect(actions.downloadSuccess({ handle })).toEqual(expected);
});

test("downloadError", () => {
  const err = new Error("Error");
  const expected = {
    type: actions.DOWNLOAD_ERROR,
    payload: {
      err
    }
  };
  expect(actions.downloadError({ err })).toEqual(expected);
});

test("downloadFiles", () => {
  const files = [{ handle: "h1" }];
  const expected = {
    type: actions.DOWNLOAD_FILES,
    payload: {
      files
    }
  };
  expect(actions.downloadFiles({ files })).toEqual(expected);
});

test("uploadFiles", () => {
  const files = ["f1"];
  const masterHandle = "mh1";
  const isDirectory = false;
  const directory = "/";

  const expected = {
    type: actions.UPLOAD_FILES,
    payload: {
      files,
      masterHandle,
      directory,
      isDirectory
    }
  };
  expect(
    actions.uploadFiles({ files, directory, masterHandle, isDirectory })
  ).toEqual(expected);
});

test("uploadFile", () => {
  const file = "f1";
  const masterHandle = "mh1";
  const directory = "/";
  const isDirectory = false;

  const expected = {
    type: actions.UPLOAD_FILE,
    payload: {
      file,
      directory,
      masterHandle
    }
  };
  expect(actions.uploadFile({ file, directory, masterHandle })).toEqual(
    expected
  );
});

test("uploadSuccess", () => {
  const masterHandle = "mh1";
  const directory = "/";

  const expected = {
    type: actions.UPLOAD_SUCCESS,
    payload: {
      directory,
      masterHandle
    }
  };
  expect(actions.uploadSuccess({ directory, masterHandle })).toEqual(expected);
});

test("uploadError", () => {
  const handle = "h1";
  const filename = "f1";
  const error = "e1";

  const expected = {
    type: actions.UPLOAD_ERROR,
    payload: {
      handle,
      filename,
      error
    }
  };
  expect(actions.uploadError({ filename, handle, error })).toEqual(expected);
});
