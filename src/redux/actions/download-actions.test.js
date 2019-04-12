import actions from "./download-actions";

test("streamDownload", () => {
  const handle = "handle";
  const expected = {
    type: actions.DOWNLOAD,
    payload: {
      handle: handle
    }
  };
  expect(actions.streamDownload({ handle })).toEqual(expected);
});

test("streamDownloadProgress", () => {
  const progress = 0.15;
  const expected = {
    type: actions.DOWNLOAD_PROGRESS,
    payload: progress
  };
  expect(actions.streamDownloadProgress({ progress })).toEqual(expected);
});

test("streamDownloadSuccess", () => {
  const expected = {
    type: actions.DOWNLOAD_SUCCESS,
    payload: {}
  };
  expect(actions.streamDownloadSuccess()).toEqual(expected);
});

test("streamDownloadError", () => {
  const err = "err";
  const expected = {
    type: actions.DOWNLOAD_ERROR,
    payload: err
  };
  expect(actions.streamDownloadError({ err })).toEqual(expected);
});
