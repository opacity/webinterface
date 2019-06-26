import fileManagerActions from "../actions/filemanager-actions";

const initState = {
  files: []
};

const filesReducer = (state = initState, action) => {
  switch (action.type) {
    case fileManagerActions.ADD_FILE:
      const { handle } = action.payload;
      if (state.files) {
        const isAdd = state.files.find(i => i === action.payload.handle);
        if (isAdd) {
          return state;
        }
        return { ...state, files: [...state.files, handle] };
      }
      return { ...state, files: [handle] };

    case fileManagerActions.DELETE_FILE:
      if (state.files) {
        return {
          ...state,
          files: state.files.filter(i => i !== action.payload.handle)
        };
      }
      return state;

    case fileManagerActions.RESET_FILES:
      return initState;

    case fileManagerActions.SET_FILES:
      return { ...state, files: action.payload.files };

    default:
      return state;
  }
};

export default filesReducer;
