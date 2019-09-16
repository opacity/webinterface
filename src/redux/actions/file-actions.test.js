import actions from "./file-actions";

test("renameFile", () => {
  const name = "n1";
  const newName = "h1";
  const folder = "/";
  const masterHandle = "mh1";
  const expected = {
    type: actions.RENAME_FILE,
    payload: {
      newName,
      name,
      folder,
      masterHandle
    }
  };
  expect(actions.renameFile({ name, newName, folder, masterHandle })).toEqual(
    expected
  );
});

test("renameFileSuccess", () => {
  const masterHandle = "mh1";
  const folder = "/";
  const expected = {
    type: actions.RENAME_FILE_SUCCESS,
    payload: {
      masterHandle,
      folder
    }
  };
  expect(actions.renameFileSuccess({ masterHandle, folder })).toEqual(expected);
});

test("renameFileFailure", () => {
  const error = "e1";
  const expected = {
    type: actions.RENAME_FILE_FAILURE,
    payload: {
      error
    }
  };
  expect(actions.renameFileFailure({ error })).toEqual(expected);
});

test("moveFile", () => {
  const file = "n1";
  const to = "h1";
  const directory = "/";
  const masterHandle = "mh1";
  const expected = {
    type: actions.MOVE_FILE,
    payload: {
      file,
      to,
      directory,
      masterHandle
    }
  };
  expect(actions.moveFile({ file, to, directory, masterHandle })).toEqual(
    expected
  );
});

test("moveFileSuccess", () => {
  const masterHandle = "mh1";
  const file = "/";
  const expected = {
    type: actions.MOVE_FILE_SUCCESS,
    payload: {
      masterHandle,
      file
    }
  };
  expect(actions.moveFileSuccess({ masterHandle, file })).toEqual(expected);
});

test("moveFileFailure", () => {
  const error = "e1";
  const expected = {
    type: actions.MOVE_FILE_FAILURE,
    payload: {
      error
    }
  };
  expect(actions.moveFileFailure({ error })).toEqual(expected);
});
