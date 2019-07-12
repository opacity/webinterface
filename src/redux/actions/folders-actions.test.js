import actions from "./folders-actions";

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
  const expected = {
    type: actions.CREATE_FOLDER_SUCCESS,
    payload: { masterHandle }
  };
  expect(actions.createFolderSuccess({ masterHandle })).toEqual(expected);
});

test("createFolderError", () => {
  const error = "foobar";
  const expected = {
    type: actions.CREATE_FOLDER_ERROR,
    payload: { error }
  };
  expect(actions.createFolderError({ error })).toEqual(expected);
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
  const expected = {
    type: actions.REMOVE_FOLDER_SUCCESS,
    payload: { masterHandle }
  };
  expect(actions.removeFolderSuccess({ masterHandle })).toEqual(expected);
});

test("removeFolderError", () => {
  const error = "foobar";
  const expected = {
    type: actions.REMOVE_FOLDER_ERROR,
    payload: { error }
  };
  expect(actions.removeFolderError({ error })).toEqual(expected);
});
