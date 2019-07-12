import { chain } from "lodash";
import filesActions from "../actions/files-actions";

const initState = {
  list: [],
  folders: []
};

const fileGenerator = ({ name, versions }) =>
  versions.map(({ handle, size, modified }) => ({
    name,
    created: modified,
    handle,
    size
  }));

const filesReducer = (state = initState, action) => {
  switch (action.type) {
    case filesActions.SET_LIST:
      const { list, folders } = action.payload;
      const flatList = chain(list)
        .map(fileGenerator)
        .flatten()
        .value();
      const flastFolders = chain(folders)
        .map(fileGenerator)
        .flatten()
        .value();
      return { ...state, list: flatList, folders: flastFolders };

    default:
      return state;
  }
};

export default filesReducer;
