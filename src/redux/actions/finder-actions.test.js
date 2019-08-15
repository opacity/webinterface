import actions from "./finder-actions";

test("setList", () => {
  const masterHandle = "mh1";
  const files = ["fi1"];
  const folders = ["fo1"];
  const expected = {
    type: actions.SET_LIST,
    payload: {
      files,
      folders,
      masterHandle
    }
  };
  expect(actions.setList({ files, folders, masterHandle })).toEqual(expected);
});

test("getFileList", () => {
  const masterHandle = "mh1";
  const folder = "fo1";
  const expected = {
    type: actions.GET_FILE_LIST,
    payload: {
      masterHandle,
      folder
    }
  };
  expect(actions.getFileList({ folder, masterHandle })).toEqual(expected);
});

test("listenForUpdates", () => {
  const masterHandle = "mh1";
  const folder = "fo1";
  const expected = {
    type: actions.LISTEN_FOR_UPDATES,
    payload: {
      masterHandle,
      folder
    }
  };
  expect(actions.listenForUpdates({ folder, masterHandle })).toEqual(expected);
});
