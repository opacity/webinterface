import React from "react";
import { connect } from "react-redux";

import hamburgerActions from "../../redux/actions/hamburger-actions";
import LandingPageSlide from "./landing-page-slide";

const mapStateToProps = state => ({
  isHamburgerOpen: state.hamburger.isOpen
});

const mapDispatchToProps = dispatch => ({
  openHamburgerMenu: () => dispatch(hamburgerActions.openHamburgerMenu()),
  closeHamburgerMenu: () => dispatch(hamburgerActions.closeHamburgerMenu())
});

const LandingPage = ({
  isHamburgerOpen,
  openHamburgerMenu,
  closeHamburgerMenu
}) => (
  <LandingPageSlide
    isHamburgerOpen={isHamburgerOpen}
    openHamburgerMenu={openHamburgerMenu}
    closeHamburgerMenu={closeHamburgerMenu}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
