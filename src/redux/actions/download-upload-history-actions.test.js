import actions from "./download-upload-history-actions";

test("beginDownloadUploadHistory", () => {
  const expected = {
    type: actions.BEGIN_UPLOAD_HISTORY_DOWNLOAD
  };
  expect(actions.beginDownloadUploadHistory()).toEqual(expected);
});

test("downloadUploadHistorySuccess", () => {
  const expected = {
    type: actions.DOWNLOAD_UPLOAD_HISTORY_SUCCESS
  };
  expect(actions.downloadUploadHistorySuccess()).toEqual(expected);
});

test("downloadUploadHistoryFailure", () => {
  const expected = {
    type: actions.DOWNLOAD_UPLOAD_HISTORY_FAILURE
  };
  expect(actions.downloadUploadHistoryFailure()).toEqual(expected);
});
