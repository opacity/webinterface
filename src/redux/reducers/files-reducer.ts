import filesActions from "../actions/files-actions";

const initState = {
  list: []
};

const filesReducer = (state = initState, action) => {
  switch (action.type) {
    case filesActions.SET_LIST:
      const { list } = action.payload;
      return { ...state, list };

    default:
      return state;
  }
};

export default filesReducer;
