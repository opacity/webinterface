import actions from "./files-actions";

test("setList", () => {
  const list = ["foobar"];
  const expected = {
    type: actions.SET_LIST,
    payload: {
      list
    }
  };
  expect(actions.setList({ list })).toEqual(expected);
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
