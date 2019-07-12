import filesReducer from "./files-reducer";
import filesActions from "../actions/files-actions";

const initState = { list: [], folders: [] };

test("files-reducer SET_LIST", () => {
  const action = {
    type: filesActions.SET_LIST,
    payload: {
      list: [
        {
          name: "file1",
          versions: [
            {
              handle: "handle1",
              size: 456,
              modified: 123
            },
            {
              handle: "handle2",
              size: 789,
              modified: 234
            }
          ]
        }
      ]
    }
  };
  const expected = {
    ...initState,
    list: [
      {
        name: "file1",
        handle: "handle1",
        size: 456,
        created: 123
      },
      {
        name: "file1",
        handle: "handle2",
        size: 789,
        created: 234
      }
    ]
  };
  expect(filesReducer(initState, action)).toEqual(expected);
});
