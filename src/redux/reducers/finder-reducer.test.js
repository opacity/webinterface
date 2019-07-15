import finderReducer from "./finder-reducer";
import finderActions from "../actions/finder-actions";

const initState = { list: [] };

test("finder-reducer SET_LIST", () => {
  const action = {
    type: finderActions.SET_LIST,
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
  expect(finderReducer(initState, action)).toEqual(expected);
});
