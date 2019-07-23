import actions from "./folder-actions";

test("createFolder", () => {
  const name = "foobar";
  const folder = "foobar";
  const masterHandle = "foobar";
  const expected = {
    type: actions.CREATE_FOLDER,
    payload: {
      name,
      masterHandle,
      folder
    }
  };
  expect(actions.createFolder({ masterHandle, folder, name })).toEqual(
    expected
  );
});

test("createFolderSuccess", () => {
  const masterHandle = "foobar";
  const folder = "/";
  const expected = {
    type: actions.CREATE_FOLDER_SUCCESS,
    payload: { masterHandle, folder }
  };
  expect(actions.createFolderSuccess({ masterHandle, folder })).toEqual(
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
  const folder = "foobar";
  const expected = {
    type: actions.REMOVE_FOLDER,
    payload: {
      name,
      masterHandle,
      folder
    }
  };
  expect(actions.removeFolder({ masterHandle, folder, name })).toEqual(
    expected
  );
});

test("removeFolderSuccess", () => {
  const masterHandle = "foobar";
  const folder = "foobar";
  const expected = {
    type: actions.REMOVE_FOLDER_SUCCESS,
    payload: { masterHandle, folder }
  };
  expect(actions.removeFolderSuccess({ masterHandle, folder })).toEqual(
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
