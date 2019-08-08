import actions from "./finder-actions";

test("setList", () => {
  const files = ["foobar"];
  const expected = {
    type: actions.SET_LIST,
    payload: {
      files
    }
  };
  expect(actions.setList({ files })).toEqual(expected);
});

test("getFileList", () => {
  const masterHandle = "mh1";
  const expected = {
    type: actions.GET_FILE_LIST,
    payload: {
      masterHandle
    }
  };
  expect(actions.getFileList({ masterHandle })).toEqual(expected);
});
