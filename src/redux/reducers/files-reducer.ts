import { chain } from "lodash";
import filesActions from "../actions/files-actions";

const initState = {
  list: []
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
      const { list } = action.payload;
      const flatFiles = chain(list)
        .map(fileGenerator)
        .flatten()
        .value();

      return {
        ...state,
        list: flatFiles
      };

    default:
      return state;
  }
};

export default filesReducer;
