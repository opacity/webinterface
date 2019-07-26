import actions from "./upload-actions";

test("uplaodFiles", () => {
  const files = ["f1"];
  const masterHandle = "mh1";
  const folder = "/";
  const isDirectory = false;

  const expected = {
    type: actions.UPLOAD_FILES,
    payload: {
      files,
      folder,
      masterHandle,
      isDirectory
    }
  };
  expect(
    actions.uploadFiles({ files, folder, masterHandle, isDirectory })
  ).toEqual(expected);
});

test("uplaodFile", () => {
  const file = "f1";
  const masterHandle = "mh1";
  const folder = "/";

  const expected = {
    type: actions.UPLOAD_FILE,
    payload: {
      file,
      folder,
      masterHandle
    }
  };
  expect(actions.uploadFile({ file, folder, masterHandle })).toEqual(expected);
});

test("uploadSuccess", () => {
  const masterHandle = "mh1";
  const folder = "/";

  const expected = {
    type: actions.UPLOAD_SUCCESS,
    payload: {
      folder,
      masterHandle
    }
  };
  expect(actions.uploadSuccess({ folder, masterHandle })).toEqual(expected);
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
