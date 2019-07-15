import { chain } from "lodash";
import finderActions from "../actions/finder-actions";

const initState = {
  files: [],
  folders: []
};

const fileGenerator = ({ name, versions }) =>
  versions.map(({ handle, size, modified }) => ({
    name,
    created: modified,
    handle,
    size
  }));

const folderGenerator = ({ name }) => ({ name });

const finderReducer = (state = initState, action) => {
  switch (action.type) {
    case finderActions.SET_LIST:
      const { files, folders } = action.payload;
      const flatFiles = chain(files)
        .map(fileGenerator)
        .flatten()
        .value();

      return {
        ...state,
        files: flatFiles,
        folders: folders.map(folderGenerator)
      };

    default:
      return state;
  }
};

export default finderReducer;
