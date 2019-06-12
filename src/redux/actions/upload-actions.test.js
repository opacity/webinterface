import actions from "./upload-actions";

test("uplaodFiles", () => {
  const files = ["f1"];
  const masterHandle = "mh1";

  const expected = {
    type: actions.UPLOAD_FILES,
    payload: {
      files,
      masterHandle
    }
  };
  expect(actions.uploadFiles({ files, masterHandle })).toEqual(expected);
});

test("uplaodFiles", () => {
  const file = "f1";
  const masterHandle = "mh1";

  const expected = {
    type: actions.UPLOAD_FILE,
    payload: {
      file,
      masterHandle
    }
  };
  expect(actions.uploadFile({ file, masterHandle })).toEqual(expected);
});

test("uploadSuccess", () => {
  const masterHandle = "mh1";

  const expected = {
    type: actions.UPLOAD_SUCCESS,
    payload: {
      masterHandle
    }
  };
  expect(actions.uploadSuccess({ masterHandle })).toEqual(expected);
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
