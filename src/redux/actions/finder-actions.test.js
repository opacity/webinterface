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
  const directory = "fo1";
  const expected = {
    type: actions.GET_FILE_LIST,
    payload: {
      masterHandle,
      directory
    }
  };
  expect(actions.getFileList({ directory, masterHandle })).toEqual(expected);
});

test("listenForUpdates", () => {
  const masterHandle = "mh1";
  const directory = "fo1";
  const expected = {
    type: actions.LISTEN_FOR_UPDATES,
    payload: {
      masterHandle,
      directory
    }
  };
  expect(actions.listenForUpdates({ directory, masterHandle })).toEqual(
    expected
  );
});
