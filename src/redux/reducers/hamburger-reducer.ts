import hamburgerActions from "../actions/hamburger-actions";

const initState = {
  isOpen: false
};

const hamburgerReducer = (state = initState, action) => {
  switch (action.type) {
    case hamburgerActions.OPEN_HAMBURGER_MENU:
      return { ...state, isOpen: true };
    case hamburgerActions.CLOSE_HAMBURGER_MENU:
      return { ...state, isOpen: false };

    default:
      return state;
  }
};

export default hamburgerReducer;
