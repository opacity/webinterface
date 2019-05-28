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
