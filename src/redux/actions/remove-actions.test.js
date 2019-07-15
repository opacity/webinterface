import actions from "./remove-actions";

test("removeFileByHandle", () => {
  const name = "n1";
  const handle = "h1";
  const folder = "/";
  const masterHandle = "mh1";
  const expected = {
    type: actions.REMOVE_FILE_BY_HANDLE,
    payload: {
      name,
      handle,
      folder,
      masterHandle
    }
  };
  expect(
    actions.removeFileByHandle({ name, handle, folder, masterHandle })
  ).toEqual(expected);
});

test("removeFileByName", () => {
  const name = "n1";
  const handle = "h1";
  const folder = "/";
  const masterHandle = "mh1";
  const expected = {
    type: actions.REMOVE_FILE_BY_NAME,
    payload: {
      name,
      handle,
      folder,
      masterHandle
    }
  };
  expect(
    actions.removeFileByName({ name, handle, folder, masterHandle })
  ).toEqual(expected);
});

test("removeSuccess", () => {
  const masterHandle = "mh1";
  const folder = "/";
  const expected = {
    type: actions.REMOVE_SUCCESS,
    payload: {
      masterHandle,
      folder
    }
  };
  expect(actions.removeSuccess({ masterHandle, folder })).toEqual(expected);
});

test("removeError", () => {
  const error = "e1";
  const expected = {
    type: actions.REMOVE_ERROR,
    payload: {
      error
    }
  };
  expect(actions.removeError({ error })).toEqual(expected);
});
