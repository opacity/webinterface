import actions from "./folder-actions";

test("createFolder", () => {
  const name = "foobar";
  const masterHandle = "foobar";
  const expected = {
    type: actions.CREATE_FOLDER,
    payload: {
      name,
      masterHandle
    }
  };
  expect(actions.createFolder({ masterHandle, name })).toEqual(expected);
});

test("createFolderSuccess", () => {
  const expected = {
    type: actions.CREATE_FOLDER_SUCCESS
  };
  expect(actions.createFolderSuccess()).toEqual(expected);
});

test("deleteFolder", () => {
  const name = "foobar";
  const masterHandle = "foobar";
  const expected = {
    type: actions.DELETE_FOLDER,
    payload: {
      name,
      masterHandle
    }
  };
  expect(actions.deleteFolder({ masterHandle, name })).toEqual(expected);
});

test("createFolderSuccess", () => {
  const expected = {
    type: actions.DELETE_FOLDER_SUCCESS
  };
  expect(actions.deleteFolderSuccess()).toEqual(expected);
});
