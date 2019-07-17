import { chain } from "lodash";
import finderActions from "../actions/finder-actions";

const initState = {
  files: [],
  folders: [],
  isLoading: false
};

const fileGenerator = ({ name, versions }) =>
  versions.map(({ handle, size, modified }) => ({
    name,
    created: modified,
    handle,
    size
  }));

const folderGenerator = ({ name, location }) => ({ name, location });

const finderReducer = (state = initState, action) => {
  switch (action.type) {
    case finderActions.GET_FILE_LIST:
      return {
        ...state,
        files: [],
        folders: [],
        isLoading: true
      };

    case finderActions.SET_LIST:
      const { files, folders } = action.payload;
      const flatFiles = chain(files)
        .map(fileGenerator)
        .flatten()
        .value();

      return {
        ...state,
        files: flatFiles,
        folders: folders.map(folderGenerator),
        isLoading: false
      };

    default:
      return state;
  }
};

export default finderReducer;
