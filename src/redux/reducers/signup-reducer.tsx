import signupActions from "../actions/signup-actions";

const initState = {
  privateKey: null
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case signupActions.SET_PRIVATE_KEY:
      const { privateKey } = action.payload;
      return { ...state, privateKey };

    default:
      return state;
  }
};

export default signupReducer;
