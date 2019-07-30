import actions from "./rename-actions";

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

test("renameFileError", () => {
  const error = "e1";
  const expected = {
    type: actions.RENAME_FILE_ERROR,
    payload: {
      error
    }
  };
  expect(actions.renameFileError({ error })).toEqual(expected);
});
