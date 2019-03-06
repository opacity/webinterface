import signupActions from "../actions/signup-actions";

const initState = {
  privateKey: null,
  storagePin: null,
  invoice: null // { cost, ethAddress }
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case signupActions.SET_PRIVATE_KEY:
      const { privateKey } = action.payload;
      return { ...state, privateKey };
    case signupActions.SET_STORAGE_PIN:
      const { storagePin } = action.payload;
      return { ...state, storagePin };

    default:
      return state;
  }
};

export default signupReducer;
