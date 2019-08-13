import finderReducer from "./finder-reducer";
import finderActions from "../actions/finder-actions";

const initState = { files: [], folders: [], isLoading: false };

test("finder-reducer SET_LIST", () => {
  const action = {
    type: finderActions.SET_LIST,
    payload: {
      folders: [
        {
          name: "folder1",
          location: "l1"
        },
        {
          name: "folder2",
          location: "l2"
        }
      ],
      files: [
        {
          name: "file1",
          versions: [
            {
              handle: "handle1",
              size: 456,
              created: 123
            },
            {
              handle: "handle2",
              size: 789,
              created: 234
            }
          ]
        }
      ]
    }
  };
  const modifiedState = {
    ...initState,
    folders: [],
    files: [],
    isLoading: true
  };
  const expected = {
    ...initState,
    isLoading: false,
    folders: [
      {
        name: "folder1",
        location: "l1",
        folder: {
          name: "folder1",
          location: "l1"
        }
      },
      {
        name: "folder2",
        location: "l2",
        folder: {
          name: "folder2",
          location: "l2"
        }
      }
    ],
    files: [
      {
        name: "file1",
        handle: "handle1",
        size: 456,
        created: 123,
        version: {
          handle: "handle1",
          size: 456,
          created: 123
        }
      },
      {
        name: "file1",
        handle: "handle2",
        size: 789,
        created: 234,
        version: {
          handle: "handle2",
          size: 789,
          created: 234
        }
      }
    ]
  };
  expect(finderReducer(modifiedState, action)).toEqual(expected);
});

test("finder-reducer GET_FILE_LIST", () => {
  const action = {
    type: finderActions.GET_FILE_LIST
  };

  const modifiedState = {
    ...initState,
    isLoading: false,
    folders: ["folder1"],
    files: ["file1"]
  };
  const expected = {
    ...initState,
    isLoading: true,
    folders: [],
    files: []
  };
  expect(finderReducer(modifiedState, action)).toEqual(expected);
});
