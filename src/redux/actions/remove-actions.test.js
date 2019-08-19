import actions from "./remove-actions";

test("removeFileByVersion", () => {
  const name = "n1";
  const version = { handle: "h1" };
  const directory = "/";
  const masterHandle = "mh1";
  const expected = {
    type: actions.REMOVE_FILE_BY_VERSION,
    payload: {
      name,
      version,
      directory,
      masterHandle
    }
  };
  expect(
    actions.removeFileByVersion({ name, version, directory, masterHandle })
  ).toEqual(expected);
});

test("removeSuccess", () => {
  const masterHandle = "mh1";
  const version = { handle: "h1" };
  const directory = "/";
  const expected = {
    type: actions.REMOVE_FILE_SUCCESS,
    payload: {
      masterHandle,
      directory,
      version
    }
  };
  expect(
    actions.removeFileSuccess({ masterHandle, directory, version })
  ).toEqual(expected);
});

test("removeError", () => {
  const error = "e1";
  const expected = {
    type: actions.REMOVE_FILE_ERROR,
    payload: {
      error
    }
  };
  expect(actions.removeFileError({ error })).toEqual(expected);
});

test("removeFiles", () => {
  const files = "files";
  const expected = {
    type: actions.REMOVE_FILES,
    payload: {
      files
    }
  };
  expect(actions.removeFiles({ files })).toEqual(expected);
});
