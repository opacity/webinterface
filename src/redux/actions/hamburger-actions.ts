const OPEN_HAMBURGER_MENU = "opacity/hamburger/open-hamburger-menu";
const CLOSE_HAMBURGER_MENU = "opacity/hamburger/close-hamburger-menu";

const ACTIONS = Object.freeze({
  OPEN_HAMBURGER_MENU,
  CLOSE_HAMBURGER_MENU,

  openHamburgerMenu: () => ({
    type: OPEN_HAMBURGER_MENU
  }),
  closeHamburgerMenu: () => ({
    type: CLOSE_HAMBURGER_MENU
  })
});

export default ACTIONS;
