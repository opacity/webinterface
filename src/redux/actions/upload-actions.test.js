import actions from "./upload-actions";

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
