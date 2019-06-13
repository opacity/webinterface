import React from "react";
import { connect } from "react-redux";

import LandingPageSlide from "./landing-page-slide";

import { AUTHENTICATION_STATUSES } from "../../config";

const mapStateToProps = state => ({
  authenticationStatus: state.authentication.status
});

const mapDispatchToProps = dispatch => ({});

const LandingPage = ({ authenticationStatus }) => (
  <LandingPageSlide
    isLoggedIn={authenticationStatus === AUTHENTICATION_STATUSES.LOGGED_IN}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
