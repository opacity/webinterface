import actions from "./folder-actions";

test("createFolder", () => {
  const name = "foobar";
  const directory = "foobar";
  const masterHandle = "foobar";
  const expected = {
    type: actions.CREATE_FOLDER,
    payload: {
      name,
      masterHandle,
      directory
    }
  };
  expect(actions.createFolder({ masterHandle, directory, name })).toEqual(
    expected
  );
});

test("createFolderSuccess", () => {
  const masterHandle = "foobar";
  const directory = "/";
  const expected = {
    type: actions.CREATE_FOLDER_SUCCESS,
    payload: { masterHandle, directory }
  };
  expect(actions.createFolderSuccess({ masterHandle, directory })).toEqual(
    expected
  );
});

test("createFolderFailure", () => {
  const error = "foobar";
  const expected = {
    type: actions.CREATE_FOLDER_FAILURE,
    payload: { error }
  };
  expect(actions.createFolderFailure({ error })).toEqual(expected);
});

test("removeFolder", () => {
  const name = "foobar";
  const masterHandle = "foobar";
  const directory = "foobar";
  const expected = {
    type: actions.REMOVE_FOLDER,
    payload: {
      name,
      masterHandle,
      directory
    }
  };
  expect(actions.removeFolder({ masterHandle, directory, name })).toEqual(
    expected
  );
});

test("removeFolderSuccess", () => {
  const masterHandle = "foobar";
  const directory = "foobar";
  const expected = {
    type: actions.REMOVE_FOLDER_SUCCESS,
    payload: { masterHandle, directory }
  };
  expect(actions.removeFolderSuccess({ masterHandle, directory })).toEqual(
    expected
  );
});

test("removeFolderFailure", () => {
  const error = "foobar";
  const expected = {
    type: actions.REMOVE_FOLDER_FAILURE,
    payload: { error }
  };
  expect(actions.removeFolderFailure({ error })).toEqual(expected);
});
