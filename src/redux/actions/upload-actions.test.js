import actions from "./upload-actions";

test("selectAlphaBroker", () => {
  const url = "url";
  const expected = {
    type: actions.SELECT_ALPHA_BROKER,
    payload: url
  };
  expect(actions.selectAlphaBroker(url)).toEqual(expected);
});

test("selectBetaBroker", () => {
  const url = "handle";
  const expected = {
    type: actions.SELECT_BETA_BROKER,
    payload: url
  };
  expect(actions.selectBetaBroker(url)).toEqual(expected);
});

test("selectRetentionYears", () => {
  const value = "value";
  const expected = {
    type: actions.SELECT_RETENTION_YEARS,
    payload: value
  };
  expect(actions.selectRetentionYears(value)).toEqual(expected);
});

// Stream actions
test("streamUpload", () => {
  const file = "file";
  const retentionYears = "retentionYears";
  const brokers = "brokers";
  const expected = {
    type: actions.UPLOAD,
    payload: { file, retentionYears, brokers }
  };
  expect(actions.streamUpload({ file, retentionYears, brokers })).toEqual(
    expected
  );
});

test("streamInvoiced", () => {
  const cost = "cost";
  const ethAddress = "ethAddress";
  const expected = {
    type: actions.INVOICED,
    payload: { cost, ethAddress }
  };
  expect(actions.streamInvoiced({ cost, ethAddress })).toEqual(expected);
});

test("streamPaymentPending", () => {
  const expected = {
    type: actions.PAYMENT_PENDING
  };
  expect(actions.streamPaymentPending()).toEqual(expected);
});

test("streamPaymentConfirmed", () => {
  const filename = "filename";
  const handle = "handle";
  const numberOfChunks = "numberOfChunks";
  const expected = {
    type: actions.PAYMENT_CONFIRMED,
    payload: { filename, handle, numberOfChunks }
  };
  expect(
    actions.streamPaymentConfirmed({ filename, handle, numberOfChunks })
  ).toEqual(expected);
});

test("streamChunksDelivered", () => {
  const handle = "handle";
  const expected = {
    type: actions.CHUNKS_DELIVERED,
    payload: { handle }
  };
  expect(actions.streamChunksDelivered({ handle })).toEqual(expected);
});

test("streamUploadProgress", () => {
  const progress = 0.18;
  const expected = {
    type: actions.UPLOAD_PROGRESS,
    payload: { progress }
  };
  expect(actions.streamUploadProgress({ progress })).toEqual(expected);
});

test("streamUploadSuccess", () => {
  const handle = "handle";
  const expected = {
    type: actions.UPLOAD_SUCCESS,
    payload: { handle }
  };
  expect(actions.streamUploadSuccess({ handle })).toEqual(expected);
});

test("streamUploadError", () => {
  const handle = "handle";
  const err = "err";
  const expected = {
    type: actions.UPLOAD_ERROR,
    payload: { err }
  };
  expect(actions.streamUploadError({ handle, err })).toEqual(expected);
});
