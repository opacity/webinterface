import actions from "./download-actions";

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
