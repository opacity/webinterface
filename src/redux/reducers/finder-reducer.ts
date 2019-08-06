import { chain } from "lodash";
import finderActions from "../actions/finder-actions";
import removeActions from "../actions/remove-actions";

import { IFile } from "../../models/file";
import { IFolder } from "../../models/folder";

const initState = {
  files: [],
  folders: [],
  isLoading: false
};

const fileGenerator = ({ name, versions }): IFile[] =>
  versions.map(version => {
    const { handle, size, created } = version;
    return {
      name,
      created,
      handle,
      size,
      version
    };
  });

const folderGenerator = ({ name, location }): IFolder => ({ name, location });

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

    case removeActions.REMOVE_FILE_SUCCESS:
      const { version } = action.payload;
      return {
        ...state,
        files: state.files.filter(
          (file: IFile) => file.version.handle !== version.handle
        )
      };

    default:
      return state;
  }
};

export default finderReducer;
