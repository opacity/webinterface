import actions from "./navigation-actions";

test("visitUploadForm", () => {
  const expected = {
    type: actions.VISIT_UPLOAD_FORM
  };
  expect(actions.visitUploadForm()).toEqual(expected);
});

test("visitDownloadForm", () => {
  const expected = {
    type: actions.VISIT_DOWNLOAD_FORM
  };
  expect(actions.visitDownloadForm()).toEqual(expected);
});

test("errorPage", () => {
  const expected = {
    type: actions.ERROR_PAGE
  };
  expect(actions.errorPage()).toEqual(expected);
});

test("brokersDownPage", () => {
  const expected = {
    type: actions.BROKERS_DOWN
  };
  expect(actions.brokersDownPage()).toEqual(expected);
});
