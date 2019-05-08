import React from "react";
import { connect } from "react-redux";

import StandsOutSlide from "./stands-out-slide";

import { AUTHENTICATION_STATUSES } from "../../config";

const mapStateToProps = state => ({
  authenticationStatus: state.authentication.status
});

const mapDispatchToProps = dispatch => ({});

const StandsOut = ({ authenticationStatus }) => (
  <StandsOutSlide
    isLoggedIn={authenticationStatus === AUTHENTICATION_STATUSES.LOGGED_IN}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandsOut);
