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
  const folder = { name: "fo1", location: "l1" };
  const name = "foobar";
  const masterHandle = "foobar";
  const directory = "foobar";
  const expected = {
    type: actions.REMOVE_FOLDER,
    payload: {
      folder,
      name,
      masterHandle,
      directory
    }
  };
  expect(
    actions.removeFolder({ masterHandle, directory, name, folder })
  ).toEqual(expected);
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

test("renameFolder", () => {
  const name = "foobar";
  const masterHandle = "foobar";
  const folder = "foobar";
  const newName = "foobar";
  const expected = {
    type: actions.RENAME_FOLDER,
    payload: {
      name,
      masterHandle,
      folder,
      newName
    }
  };
  expect(actions.renameFolder({ masterHandle, folder, name, newName })).toEqual(
    expected
  );
});

test("renameFolderSuccess", () => {
  const masterHandle = "foobar";
  const folder = "foobar";
  const expected = {
    type: actions.RENAME_FOLDER_SUCCESS,
    payload: { masterHandle, folder }
  };
  expect(actions.renameFolderSuccess({ masterHandle, folder })).toEqual(
    expected
  );
});

test("renameFolderFailure", () => {
  const error = "foobar";
  const expected = {
    type: actions.RENAME_FOLDER_FAILURE,
    payload: { error }
  };
  expect(actions.renameFolderFailure({ error })).toEqual(expected);
});

test("moveFolder", () => {
  const directory = "foobar";
  const masterHandle = "foobar";
  const folder = "foobar";
  const to = "foobar";
  const expected = {
    type: actions.MOVE_FOLDER,
    payload: {
      folder,
      masterHandle,
      directory,
      to
    }
  };
  expect(actions.moveFolder({ masterHandle, folder, to, directory })).toEqual(
    expected
  );
});

test("moveFolderSuccess", () => {
  const masterHandle = "foobar";
  const folder = "foobar";
  const expected = {
    type: actions.MOVE_FOLDER_SUCCESS,
    payload: { masterHandle, folder }
  };
  expect(actions.moveFolderSuccess({ masterHandle, folder })).toEqual(expected);
});

test("moveFolderFailure", () => {
  const error = "foobar";
  const expected = {
    type: actions.MOVE_FOLDER_FAILURE,
    payload: { error }
  };
  expect(actions.moveFolderFailure({ error })).toEqual(expected);
});
