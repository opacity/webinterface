import actions from "./folder-actions";

test("createFolder", () => {
  const name = "foobar";
  const expected = {
    type: actions.CREATE_FOLDER,
    payload: {
      name
    }
  };
  expect(actions.createFolder({ name })).toEqual(expected);
});

test("createFolderSuccess", () => {
  const expected = {
    type: actions.CREATE_FOLDER_SUCCESS
  };
  expect(actions.createFolderSuccess()).toEqual(expected);
});
