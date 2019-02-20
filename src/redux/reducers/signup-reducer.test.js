import signup from "./signup-reducer";
import signupActions from "../actions/signup-actions";

const initState = {
  privateKey: null
};

test("signup-reducer SET_PRIVATE_KEY", () => {
  const action = {
    type: signupActions.SET_PRIVATE_KEY,
    payload: { privateKey: "foobar" }
  };
  const expected = {
    privateKey: "foobar"
  };
  expect(signup(initState, action)).toEqual(expected);
});
