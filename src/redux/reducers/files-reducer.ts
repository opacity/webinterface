import _ from "lodash";
import filesActions from "../actions/files-actions";

const initState = {
  list: []
};

const filesReducer = (state = initState, action) => {
  switch (action.type) {
    case filesActions.SET_LIST:
      const { list } = action.payload;
      const flatList = _.map(list, file => {
        return {
          name: file.name,
          created: file.created,
          handle: file.versions[0].handle,
          size: file.versions[0].size
        };
      });
      return { ...state, list: flatList };

    default:
      return state;
  }
};

export default filesReducer;
